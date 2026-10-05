window.PolyTrackMods.register({
  id:"polytrack_ai_lab",
  activate(api){
    api.log("PolyTrack AI Lab activated.");
    const panel=document.createElement("div");
    panel.id="polytrack-ai-lab-panel";
    panel.innerHTML=`<div style="position:fixed;top:16px;right:16px;z-index:99999;background:#111;color:#fff;padding:14px 16px;border:1px solid #555;border-radius:10px;font:14px system-ui;box-shadow:0 8px 30px #0008"><b>POLYTRACK AI LAB</b><div style="margin-top:6px;color:#aaa">Mod loaded. Driver hookup is disabled until a compatible simulation API is confirmed.</div></div>`;
    document.body.appendChild(panel);
  },
  deactivate(){document.getElementById("polytrack-ai-lab-panel")?.remove()}
});