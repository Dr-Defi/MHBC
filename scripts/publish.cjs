const fs = require("fs");
const path = require("path");

async function publish() {
  try {
    // Put your tenant ID for this project here, or pass TENANT_ID env var
    const tenantId = process.env.TENANT_ID || "3961";
    console.log("📋 Using tenant ID: " + tenantId);

    // Read whitelisted files from public/prompts/
    console.log("\n Reading files from public/prompts/...");
    const whitelist = [
      "tele-knowledge.md",
      "Agent_Identity.md",
      "template-rules.md",
      "glass-prompt.md",
    ];

    const files = [];
    for (const filename of whitelist) {
      const filepath = path.join(process.cwd(), "public", "prompts", filename);
      if (fs.existsSync(filepath)) {
        const content = fs.readFileSync(filepath, "utf8");
        files.push({
          name: filename,
          content,
          // Ensure exact instruction toggle is enabled and priority is high
          verbatim_instruction: true,
          priority: "high",
        });
        console.log(`   ✓ ${filename}`);
      } else {
        console.log(`   - ${filename} (not found, skipping)`);
      }
    }

    if (files.length === 0) {
      throw new Error("No files found in public/ directory");
    }

    // POST to API
    const apiUrl = "https://bn-prompt.mobeus.ai";
    console.log(`\n API: ${apiUrl}`);
    console.log("\n Publishing to prompt-tool...");

    // Publish API key required — generate from admin panel → API Keys
    const publishApiKey = "mbs_pub_f9ef20128a25187579d3d0763e255b4ec04d219794fc364bbfbce72e0454810c";
    if (!publishApiKey) {
      throw new Error("PUBLISH_API_KEY environment variable is required. Generate a publish key from the admin panel.");
    }

    const response = await fetch(`${apiUrl}/api/publish/from-files`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": publishApiKey,
      },
      body: JSON.stringify({
        tenantId,
        files,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || response.statusText);
    }

    const result = await response.json();

    // Display results
    console.log("\n✅ " + result.message);

    console.log("\n Summary:");
    console.log(`   New: ${result.summary.new}`);
    console.log(`   Modified: ${result.summary.modified}`);
    console.log(`   Unchanged: ${result.summary.unchanged}`);

    if (result.published && result.published.length > 0) {
      console.log("\n Published:");
      result.published.forEach((item) => {
        console.log(
          `   ${item.action === "created" ? "+" : "✓"} ${item.filename}`,
        );
      });
    }

    if (result.unchanged && result.unchanged.length > 0) {
      console.log("\n   Unchanged:");
      result.unchanged.forEach((filename) => {
        console.log(`   - ${filename}`);
      });
    }
  } catch (error) {
    console.error("\n❌ Publish failed:", error.message);
    process.exit(1);
  }
}

publish();