import{_ as e,c as a,o as s,d as l}from"./app.c783e43d.js";const g=JSON.parse('{"title":"Docker “hello-world” example","description":"","frontmatter":{"prev":{"text":"Docker Registry","link":"concepts/registry.md"},"next":{"text":"Ubuntu Example","link":"examples/ubuntu.md"}},"headers":[{"level":2,"title":"Overview","slug":"overview","link":"#overview","children":[]},{"level":2,"title":"Checking Docker","slug":"checking-docker","link":"#checking-docker","children":[]},{"level":2,"title":"Pull hello-world Image","slug":"pull-hello-world-image","link":"#pull-hello-world-image","children":[]},{"level":2,"title":"Run hello-world Image","slug":"run-hello-world-image","link":"#run-hello-world-image","children":[]}],"relativePath":"examples/hello_world.md","lastUpdated":1679162930000}'),n={name:"examples/hello_world.md"},o=l(`<h1 id="docker-hello-world-example" tabindex="-1">Docker “hello-world” example <a class="header-anchor" href="#docker-hello-world-example" aria-hidden="true">#</a></h1><p>A simple example to understand docker</p><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-hidden="true">#</a></h2><p>Docker <code>hello-world</code> is a simple example application that demonstrates the basic functionality of Docker. It is often used as the first example when getting started with Docker to ensure that Docker is installed and running correctly on your system.</p><p>The <code>hello-world</code> application is a very simple program that prints a message to the console. When you run the Docker <code>hello world</code> example, Docker pulls a small, lightweight image from the Docker Hub registry and runs a container based on that image. The container executes the <code>Hello World</code> program and prints a message to the console.</p><p>This example is useful for understanding how Docker images and containers work, and how they can be used to package and deploy applications in a consistent and portable way.</p><h2 id="checking-docker" tabindex="-1">Checking Docker <a class="header-anchor" href="#checking-docker" aria-hidden="true">#</a></h2><p>First, ensure that Docker is installed on your system. Open a terminal or command prompt and type the following command to check that Docker is installed correctly.</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">version</span></span>
<span class="line"></span></code></pre></div><p>This command will display the version number and other details of Docker if it is installed correctly.</p><h2 id="pull-hello-world-image" tabindex="-1">Pull <code>hello-world</code> Image <a class="header-anchor" href="#pull-hello-world-image" aria-hidden="true">#</a></h2><p>Next, pull the<code>hello-world</code> image from the Docker Hub registry by running the following command.</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pull</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">hello-world</span></span>
<span class="line"></span></code></pre></div><p>This command will download the <code>hello-world</code> image from the Docker Hub registry and store it locally on your machine.</p><p>To check whether <code>hello-world</code> image has been properly downloaded or not, apply the following command.</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">images</span></span>
<span class="line"></span></code></pre></div><p>This command will show you all docker images list. Among them, you will see your hello-world image from the list.</p><h2 id="run-hello-world-image" tabindex="-1">Run <code>hello-world</code> Image <a class="header-anchor" href="#run-hello-world-image" aria-hidden="true">#</a></h2><p>Now, run the following command to start a container based on the <code>hello-world</code> image.</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">hello-world</span></span>
<span class="line"></span></code></pre></div><p>This command will start a container, which will execute the <code>hello-world</code> program and display a message on the screen.</p><div class="language-none"><button title="Copy Code" class="copy"></button><span class="lang">none</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">Hello from Docker!</span></span>
<span class="line"><span style="color:#A6ACCD;">This message shows that your installation appears to be working correctly.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">To generate this message, Docker took the following steps:</span></span>
<span class="line"><span style="color:#A6ACCD;"> 1. The Docker client contacted the Docker daemon.</span></span>
<span class="line"><span style="color:#A6ACCD;"> 2. The Docker daemon pulled the &quot;hello-world&quot; image from </span></span>
<span class="line"><span style="color:#A6ACCD;">    the Docker Hub. (amd64)</span></span>
<span class="line"><span style="color:#A6ACCD;"> 3. The Docker daemon created a new container from that </span></span>
<span class="line"><span style="color:#A6ACCD;">    image which runs the executable that produces the output</span></span>
<span class="line"><span style="color:#A6ACCD;">    you are currently reading.</span></span>
<span class="line"><span style="color:#A6ACCD;"> 4. The Docker daemon streamed that output to the Docker </span></span>
<span class="line"><span style="color:#A6ACCD;">    client, which sent it to your terminal.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">To try something more ambitious, you can run an Ubuntu container with:</span></span>
<span class="line"><span style="color:#A6ACCD;"> $ docker run -it ubuntu bash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Share images, automate workflows, and more with a free Docker ID:</span></span>
<span class="line"><span style="color:#A6ACCD;"> https://hub.docker.com/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">For more examples and ideas, visit:</span></span>
<span class="line"><span style="color:#A6ACCD;"> https://docs.docker.com/get-started/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Congratulations! You have successfully run the <code>hello-world</code> example in Docker.</p>`,23),t=[o];function r(c,p,i,d,h,m){return s(),a("div",null,t)}const y=e(n,[["render",r]]);export{g as __pageData,y as default};
