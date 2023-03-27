import{_ as e,c as a,o,a as t}from"./app.b828ac29.js";const h=JSON.parse('{"title":"Locale","description":"","frontmatter":{"prev":{"text":"Screen","link":"commands/screen.md"},"next":{"text":"Package installation","link":"package_management/install.md"}},"headers":[],"relativePath":"commands/locale.md","lastUpdated":1679919524000}'),s={name:"commands/locale.md"},l=t(`<h1 id="locale" tabindex="-1">Locale <a class="header-anchor" href="#locale" aria-hidden="true">#</a></h1><p>The &quot;get generate locales&quot; command can be used to generate localization files for your Flutter project. To generate localization files for your project in a directory named &quot;locales&quot; located in the &quot;assets&quot; directory of your Flutter project, you can run the following command.</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">get</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">generate</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">locales</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">assets/locales</span></span>
<span class="line"></span></code></pre></div><p>This command tells &quot;get&quot; to generate localization files in the &quot;assets/locales&quot; directory of your project. The generated files will contain message translations for the specified locales, and you can customize them to add your own translations. By default, the command generates localization files for the &quot;en_US&quot; locale, but you can customize this by adding the &quot;--locales&quot; flag followed by a comma-separated list of locales you want to generate files for.</p>`,4),n=[l];function c(r,i,d,p,u,m){return o(),a("div",null,n)}const f=e(s,[["render",c]]);export{h as __pageData,f as default};
