import{_ as e,c as o,o as s,a}from"./app.b828ac29.js";const _=JSON.parse('{"title":"Generate model from Json","description":"","frontmatter":{"prev":{"text":"Project","link":"commands/project.md"},"next":{"text":"View","link":"commands/view.md"}},"headers":[],"relativePath":"commands/model.md","lastUpdated":1679919524000}'),t={name:"commands/model.md"},n=a(`<h1 id="generate-model-from-json" tabindex="-1">Generate model from Json <a class="header-anchor" href="#generate-model-from-json" aria-hidden="true">#</a></h1><p>The &quot;get generate model&quot; command can be used to generate a Dart model class based on a JSON file. To generate a model class for the &quot;user.json&quot; file located in the &quot;assets/models&quot; directory of your Flutter project, you can run the following command from the root directory of your project.</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">get</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">generate</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">model</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">on</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">home</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">with</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">assets/models/user.json</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>This command tells &quot;get&quot; to generate a model class named &quot;User&quot; based on the contents of the &quot;user.json&quot; file located at &quot;assets/models/user.json&quot;. The generated class will be saved in the &quot;lib/app/data/models&quot; directory of your project.</p>`,4),l=[n];function r(c,d,p,m,i,u){return s(),o("div",null,l)}const C=e(t,[["render",r]]);export{_ as __pageData,C as default};