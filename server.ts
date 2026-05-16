import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import fs from "fs";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes FIRST
  app.post("/api/submit-request", async (req, res) => {
    try {
      // Read config to get webhook URL
      const configPath = path.join(process.cwd(), "src", "config.json");
      const configData = JSON.parse(fs.readFileSync(configPath, "utf-8"));
      const webhookUrl = configData.webhookUrl;

      if (!webhookUrl) {
        return res.status(500).json({ error: "Webhook URL not configured" });
      }

      const { name, organization, phone, email, wechat, categories, description } =
        req.body;

      const markdownContent = `**项目需求对接申请**
> **姓名**: ${name}
> **单位**: ${organization}
> **电话**: ${phone}
> **邮箱**: ${email}
> **微信号**: ${wechat || "未提供"}
> **需求分类**: ${categories.join(", ")}
> **需求简述**:
${description}`;

      const payload = {
        msgtype: "markdown",
        markdown: {
          content: markdownContent,
        },
      };

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const responseData = await response.json();

      if (responseData.errcode !== 0) {
        throw new Error(responseData.errmsg || "WeCom Webhook failed");
      }

      res.json({ success: true });
    } catch (error) {
      console.error("Error submitting request:", error);
      res.status(500).json({ error: "Failed to submit request" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
