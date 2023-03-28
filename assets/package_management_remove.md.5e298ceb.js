import{_ as e,c as a,o as n,a as t}from"./app.b828ac29.js";const u=JSON.parse('{"title":"Remove Package","description":"","frontmatter":{"prev":{"text":"Package Install","link":"package_management/install.md"},"next":false},"headers":[{"level":2,"title":"Package removal","slug":"package-removal","link":"#package-removal","children":[]},{"level":2,"title":"Multiple package removal","slug":"multiple-package-removal","link":"#multiple-package-removal","children":[]}],"relativePath":"package_management/remove.md","lastUpdated":1679919524000}'),s={name:"package_management/remove.md"},l=t(`<h1 id="remove-package" tabindex="-1">Remove Package <a class="header-anchor" href="#remove-package" aria-hidden="true">#</a></h1><h2 id="package-removal" tabindex="-1">Package removal <a class="header-anchor" href="#package-removal" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">get</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remove</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">get_storage</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>When you run the <code>get remove</code> command with the name of a package, the package manager will remove that package and any dependencies that are no longer needed. In this case, running this command will remove the &quot;get_storage&quot; package from your Flutter project, along with any dependencies that were installed specifically for that package.</p><h2 id="multiple-package-removal" tabindex="-1">Multiple package removal <a class="header-anchor" href="#multiple-package-removal" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">get</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remove</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">get_storage</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">camera</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Running this command will remove the <code>http</code> package, the <code>get_storage</code> package and the <code>camera</code> package from your Flutter project, along with any dependencies that were installed specifically for those packages.</p><p>Once these packages are removed, you will no longer be able to use their features and functionality in your Flutter application. If you decide to use any of these packages again in the future, you can simply run the &quot;get install&quot; command to reinstall them.</p>`,8),o=[l];function r(c,p,i,d,m,g){return n(),a("div",null,o)}const v=e(s,[["render",r]]);export{u as __pageData,v as default};