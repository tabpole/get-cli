import{_ as e,c as a,o as n,a as s}from"./app.b828ac29.js";const m=JSON.parse('{"title":"Install Package","description":"","frontmatter":{"prev":{"text":"Locale","link":"commands/locale.md"},"next":{"text":"Package Remove","link":"package_management/remove.md"}},"headers":[{"level":2,"title":"Package installation","slug":"package-installation","link":"#package-installation","children":[]},{"level":2,"title":"Install specific version","slug":"install-specific-version","link":"#install-specific-version","children":[]},{"level":2,"title":"Development dependency","slug":"development-dependency","link":"#development-dependency","children":[]},{"level":2,"title":"Multiple package installation","slug":"multiple-package-installation","link":"#multiple-package-installation","children":[]}],"relativePath":"package_management/install.md","lastUpdated":1679919524000}'),l={name:"package_management/install.md"},t=s(`<h1 id="install-package" tabindex="-1">Install Package <a class="header-anchor" href="#install-package" aria-hidden="true">#</a></h1><h2 id="package-installation" tabindex="-1">Package installation <a class="header-anchor" href="#package-installation" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">get</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">get_storage</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>When you run this command in your Flutter project, it will download and install the <code>get_storage</code> package and any other dependencies required by the package. After the installation is complete, you can import the &quot;get_storage&quot; library in your Dart code and start using it.</p><h2 id="install-specific-version" tabindex="-1">Install specific version <a class="header-anchor" href="#install-specific-version" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">get</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">get_storage:2.1.1</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>When you specify a version number after the package name like <code>get_storage:2.1.1</code>, the package manager will download and install that specific version of the package rather than the latest version. This can be useful if you need to maintain compatibility with a specific version of the package or if you want to avoid potential issues with new versions of the package that might introduce breaking changes.</p><h2 id="development-dependency" tabindex="-1">Development dependency <a class="header-anchor" href="#development-dependency" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">get</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">get_storage</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--dev</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>The <code>--dev</code> flag tells the package manager to install the package as a development dependency, rather than a regular dependency. Development dependencies are typically used for packages that are only required during the development phase, such as testing or debugging tools, and are not needed in the final deployed application.</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">get</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">get_storage:2.1.1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--dev</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>So, when you run this command in your Flutter project, it will download and install version 2.1.1 of the &quot;get_storage&quot; package as a development dependency. This version of the package will not be included in the final deployed application, but can be used during the development phase for testing or other purposes.</p><h2 id="multiple-package-installation" tabindex="-1">Multiple package installation <a class="header-anchor" href="#multiple-package-installation" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">get</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">get_storage</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">camera</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>When you run the <code>get install</code> command with multiple package names separated by spaces, like in this case, the package manager will download and install each package and any required dependencies.</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">get</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http:0.13.5</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">get_storage:2.1.1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">camera</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>In this case, the command will download and install version 0.13.5 of the <code>http</code> package, version 2.1.1 of the <code>get_storage</code> package, and the latest version of the <code>camera</code> package. Once installed, you can use the features and functionality provided by these specific versions of the packages in your Flutter application.</p>`,17),i=[t];function o(p,c,r,d,h,g){return n(),a("div",null,i)}const y=e(l,[["render",o]]);export{m as __pageData,y as default};