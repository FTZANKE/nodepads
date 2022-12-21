import{_ as s,c as n,o as a,a as e}from"./app.20c67609.js";const u=JSON.parse('{"title":"MacOS","description":"","frontmatter":{},"headers":[],"relativePath":"zh/MacOS.md","lastUpdated":1671589947000}'),l={name:"zh/MacOS.md"},p=e(`<h1 id="macos" tabindex="-1">MacOS <a class="header-anchor" href="#macos" aria-hidden="true">#</a></h1><h1 id="homebrew中文官网" tabindex="-1"><a href="https://brew.sh/index_zh-cn" target="_blank" rel="noreferrer">Homebrew中文官网</a> <a class="header-anchor" href="#homebrew中文官网" aria-hidden="true">#</a></h1><ul><li>安装</li></ul><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#F6F6F4;">/usr/bin/ruby -e </span><span style="color:#DEE492;">&quot;$(</span><span style="color:#E7EE98;">curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install</span><span style="color:#DEE492;">)&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>卸载</li></ul><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#F6F6F4;">sudo /usr/bin/ruby -e </span><span style="color:#DEE492;">&quot;$(</span><span style="color:#E7EE98;">curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/uninstall</span><span style="color:#DEE492;">)&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>换源</li></ul><p>简介 Homebrew 是一款自由及开放源代码的软件包管理系统，用以简化 macOS 和 linux 系统上的软件安装过程。它拥有安装、卸载、更新、查看、搜索等很多实用的功能，通过简单的一条指令，就可以实现包管理，十分方便快捷。</p><p>Homebrew 主要有四个部分组成: brew、homebrew-core 、homebrew-bottles、homebrew-cask。</p><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>brew</td><td>Homebrew 源代码仓库</td></tr><tr><td>homebrew-core</td><td>Homebrew 核心软件仓库</td></tr><tr><td>homebrew-bottles</td><td>Homebrew 预编译二进制软件包</td></tr><tr><td>homebrew-cask</td><td>提供 macOS 应用和大型二进制文件</td></tr></tbody></table><ul><li>替换为阿里源</li></ul><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#7B7F8B;"># 查看 brew.git 当前源</span></span>
<span class="line"><span style="color:#F6F6F4;">$ </span><span style="color:#97E1F1;">cd</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;$(</span><span style="color:#E7EE98;">brew --repo</span><span style="color:#DEE492;">)&quot;</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">&amp;&amp;</span><span style="color:#F6F6F4;"> git remote -v</span></span>
<span class="line"><span style="color:#F6F6F4;">origin    https://github.com/Homebrew/brew.git (fetch)</span></span>
<span class="line"><span style="color:#F6F6F4;">origin    https://github.com/Homebrew/brew.git (push)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;"># 查看 homebrew-core.git 当前源</span></span>
<span class="line"><span style="color:#F6F6F4;">$ </span><span style="color:#97E1F1;">cd</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;$(</span><span style="color:#E7EE98;">brew --repo homebrew/core</span><span style="color:#DEE492;">)&quot;</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">&amp;&amp;</span><span style="color:#F6F6F4;"> git remote -v</span></span>
<span class="line"><span style="color:#F6F6F4;">origin    https://github.com/Homebrew/homebrew-core.git (fetch)</span></span>
<span class="line"><span style="color:#F6F6F4;">origin    https://github.com/Homebrew/homebrew-core.git (push)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;"># 修改 brew.git 为阿里源</span></span>
<span class="line"><span style="color:#F6F6F4;">$ git -C </span><span style="color:#DEE492;">&quot;$(</span><span style="color:#E7EE98;">brew --repo</span><span style="color:#DEE492;">)&quot;</span><span style="color:#F6F6F4;"> remote set-url origin https://mirrors.aliyun.com/homebrew/brew.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;"># 修改 homebrew-core.git 为阿里源</span></span>
<span class="line"><span style="color:#F6F6F4;">$ git -C </span><span style="color:#DEE492;">&quot;$(</span><span style="color:#E7EE98;">brew --repo homebrew/core</span><span style="color:#DEE492;">)&quot;</span><span style="color:#F6F6F4;"> remote set-url origin https://mirrors.aliyun.com/homebrew/homebrew-core.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;"># zsh 替换 brew bintray 镜像</span></span>
<span class="line"><span style="color:#F6F6F4;">$ </span><span style="color:#97E1F1;">echo</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">&gt;&gt;</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">~</span><span style="color:#F6F6F4;">/.zshrc</span></span>
<span class="line"><span style="color:#F6F6F4;">$ </span><span style="color:#97E1F1;">source</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">~</span><span style="color:#F6F6F4;">/.zshrc</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;"># bash 替换 brew bintray 镜像</span></span>
<span class="line"><span style="color:#F6F6F4;">$ </span><span style="color:#97E1F1;">echo</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">&gt;&gt;</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">~</span><span style="color:#F6F6F4;">/.bash_profile</span></span>
<span class="line"><span style="color:#F6F6F4;">$ </span><span style="color:#97E1F1;">source</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">~</span><span style="color:#F6F6F4;">/.bash_profile</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;"># 刷新源</span></span>
<span class="line"><span style="color:#F6F6F4;">$ brew update</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><ul><li>替换为清华源</li></ul><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#7B7F8B;"># 替换各个源</span></span>
<span class="line"><span style="color:#F6F6F4;">$ git -C </span><span style="color:#DEE492;">&quot;$(</span><span style="color:#E7EE98;">brew --repo</span><span style="color:#DEE492;">)&quot;</span><span style="color:#F6F6F4;"> remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git</span></span>
<span class="line"><span style="color:#F6F6F4;">$ git -C </span><span style="color:#DEE492;">&quot;$(</span><span style="color:#E7EE98;">brew --repo homebrew/core</span><span style="color:#DEE492;">)&quot;</span><span style="color:#F6F6F4;"> remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git</span></span>
<span class="line"><span style="color:#F6F6F4;">$ git -C </span><span style="color:#DEE492;">&quot;$(</span><span style="color:#E7EE98;">brew --repo homebrew/cask</span><span style="color:#DEE492;">)&quot;</span><span style="color:#F6F6F4;"> remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-cask.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;"># zsh 替换 brew bintray 镜像</span></span>
<span class="line"><span style="color:#F6F6F4;">$ </span><span style="color:#97E1F1;">echo</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">&gt;&gt;</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">~</span><span style="color:#F6F6F4;">/.zshrc</span></span>
<span class="line"><span style="color:#F6F6F4;">$ </span><span style="color:#97E1F1;">source</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">~</span><span style="color:#F6F6F4;">/.zshrc</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;"># bash 替换 brew bintray 镜像</span></span>
<span class="line"><span style="color:#F6F6F4;">$ </span><span style="color:#97E1F1;">echo</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">&gt;&gt;</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">~</span><span style="color:#F6F6F4;">/.bash_profile</span></span>
<span class="line"><span style="color:#F6F6F4;">$ </span><span style="color:#97E1F1;">source</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">~</span><span style="color:#F6F6F4;">/.bash_profile</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;"># 刷新源</span></span>
<span class="line"><span style="color:#F6F6F4;">$ brew update</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ul><li>替换为中科大源</li></ul><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#7B7F8B;"># 替换各个源</span></span>
<span class="line"><span style="color:#F6F6F4;">$ git -C </span><span style="color:#DEE492;">&quot;$(</span><span style="color:#E7EE98;">brew --repo</span><span style="color:#DEE492;">)&quot;</span><span style="color:#F6F6F4;"> remote set-url origin https://mirrors.ustc.edu.cn/brew.git</span></span>
<span class="line"><span style="color:#F6F6F4;">$ git -C </span><span style="color:#DEE492;">&quot;$(</span><span style="color:#E7EE98;">brew --repo homebrew/core</span><span style="color:#DEE492;">)&quot;</span><span style="color:#F6F6F4;"> remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git</span></span>
<span class="line"><span style="color:#F6F6F4;">$ git -C </span><span style="color:#DEE492;">&quot;$(</span><span style="color:#E7EE98;">brew --repo homebrew/cask</span><span style="color:#DEE492;">)&quot;</span><span style="color:#F6F6F4;"> remote set-url origin https://mirrors.ustc.edu.cn/homebrew-cask.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;"># zsh 替换 brew bintray 镜像</span></span>
<span class="line"><span style="color:#F6F6F4;">$ </span><span style="color:#97E1F1;">echo</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">&gt;&gt;</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">~</span><span style="color:#F6F6F4;">/.zshrc</span></span>
<span class="line"><span style="color:#F6F6F4;">$ </span><span style="color:#97E1F1;">source</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">~</span><span style="color:#F6F6F4;">/.zshrc</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;"># bash 替换 brew bintray 镜像</span></span>
<span class="line"><span style="color:#F6F6F4;">$ </span><span style="color:#97E1F1;">echo</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">&gt;&gt;</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">~</span><span style="color:#F6F6F4;">/.bash_profile</span></span>
<span class="line"><span style="color:#F6F6F4;">$ </span><span style="color:#97E1F1;">source</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">~</span><span style="color:#F6F6F4;">/.bash_profile</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;"># 刷新源</span></span>
<span class="line"><span style="color:#F6F6F4;">$ brew update</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ul><li>重置为官方源</li></ul><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#7B7F8B;"># 重置 brew.git 为官方源</span></span>
<span class="line"><span style="color:#F6F6F4;">$ git -C </span><span style="color:#DEE492;">&quot;$(</span><span style="color:#E7EE98;">brew --repo</span><span style="color:#DEE492;">)&quot;</span><span style="color:#F6F6F4;"> remote set-url origin https://github.com/Homebrew/brew.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;"># 重置 homebrew-core.git 为官方源</span></span>
<span class="line"><span style="color:#F6F6F4;">$ git -C </span><span style="color:#DEE492;">&quot;$(</span><span style="color:#E7EE98;">brew --repo homebrew/core</span><span style="color:#DEE492;">)&quot;</span><span style="color:#F6F6F4;"> remote set-url origin https://github.com/Homebrew/homebrew-core.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;"># 重置 homebrew-cask.git 为官方源</span></span>
<span class="line"><span style="color:#F6F6F4;">$ git -C </span><span style="color:#DEE492;">&quot;$(</span><span style="color:#E7EE98;">brew --repo homebrew/cask</span><span style="color:#DEE492;">)&quot;</span><span style="color:#F6F6F4;"> remote set-url origin https://github.com/Homebrew/homebrew-cask</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;"># zsh 注释掉 HOMEBREW_BOTTLE_DOMAIN 配置</span></span>
<span class="line"><span style="color:#F6F6F4;">$ vi </span><span style="color:#F286C4;">~</span><span style="color:#F6F6F4;">/.zshrc</span></span>
<span class="line"><span style="color:#7B7F8B;"># export HOMEBREW_BOTTLE_DOMAIN=xxxxxxxxx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;"># bash 注释掉 HOMEBREW_BOTTLE_DOMAIN 配置</span></span>
<span class="line"><span style="color:#F6F6F4;">$ vi </span><span style="color:#F286C4;">~</span><span style="color:#F6F6F4;">/.bash_profile</span></span>
<span class="line"><span style="color:#7B7F8B;"># export HOMEBREW_BOTTLE_DOMAIN=xxxxxxxxx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;"># 刷新源</span></span>
<span class="line"><span style="color:#F6F6F4;">$ brew update</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><table><thead><tr><th>命令</th><th>描述</th></tr></thead><tbody><tr><td><code>brew update</code></td><td>更新 Homebrew</td></tr><tr><td><code>brew search package</code></td><td>搜索软件包</td></tr><tr><td><code>brew install package</code></td><td>安装软件包</td></tr><tr><td><code>brew uninstall package</code></td><td>卸载软件包</td></tr><tr><td><code>brew upgrade</code></td><td>升级所有软件包</td></tr><tr><td><code>brew upgrade package</code></td><td>升级指定软件包</td></tr><tr><td><code>brew list</code></td><td>列出已安装的软件包列表</td></tr><tr><td><code>brew services command package</code></td><td>管理 brew 安装软件包</td></tr><tr><td><code>brew services list</code></td><td>列出 brew 管理运行的服务</td></tr><tr><td><code>brew info package</code></td><td>查看软件包信息</td></tr><tr><td><code>brew deps package</code></td><td>列出软件包的依赖关系</td></tr><tr><td><code>brew help</code></td><td>查看帮助</td></tr><tr><td><code>brew cleanup</code></td><td>清除过时软件包</td></tr><tr><td><code>brew link package</code></td><td>创建软件包符号链接</td></tr><tr><td><code>brew unlink package</code></td><td>取消软件包符号链接</td></tr><tr><td><code>brew doctor</code></td><td>检查系统是否存在问题</td></tr></tbody></table><h1 id="nodebrew" tabindex="-1"><a href="https://github.com/hokaccha/nodebrew" target="_blank" rel="noreferrer">Nodebrew</a> <a class="header-anchor" href="#nodebrew" aria-hidden="true">#</a></h1><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#F6F6F4;">$ rm -rf </span><span style="color:#BF9EEE;">$HOME</span><span style="color:#F6F6F4;">/.nodebrew </span><span style="color:#7B7F8B;"># 卸载nodebrew</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><table><thead><tr><th>命令</th><th>描述</th></tr></thead><tbody><tr><td><code>nodebrew help</code></td><td>显示此消息</td></tr><tr><td><code>nodebrew install &lt;version&gt;</code></td><td>Download and install <code>&lt;version&gt;</code> (from binary)</td></tr><tr><td><code>nodebrew compile &lt;version&gt;</code></td><td>Download and install <code>&lt;version&gt;</code> (from source)</td></tr><tr><td><code>nodebrew install-binary &lt;version&gt;</code></td><td>Alias of <code>install</code> (For backward compatibility)</td></tr><tr><td><code>nodebrew uninstall &lt;version&gt;</code></td><td>Uninstall <code>&lt;version&gt;</code></td></tr><tr><td><code>nodebrew use &lt;version&gt;</code></td><td>Use <code>&lt;version&gt;</code></td></tr><tr><td><code>nodebrew lis</code></td><td>已安装版本列表</td></tr><tr><td><code>nodebrew ls</code></td><td>Alias for <code>list</code></td></tr><tr><td><code>nodebrew ls-remote</code></td><td>列出远程版本</td></tr><tr><td><code>nodebrew ls-all</code></td><td>列出远程版本和已安装版本</td></tr><tr><td><code>nodebrew alias &lt;key&gt; &lt;value&gt;</code></td><td>Set alias</td></tr><tr><td><code>nodebrew unalias &lt;key&gt;</code></td><td>Remove alias</td></tr><tr><td><code>nodebrew selfupdate</code></td><td>Update nodebrew</td></tr></tbody></table><h1 id="macports" tabindex="-1"><a href="https://www.macports.org/install.php" target="_blank" rel="noreferrer">MacPorts</a> <a class="header-anchor" href="#macports" aria-hidden="true">#</a></h1><table><thead><tr><th>命令</th><th>备注</th></tr></thead><tbody><tr><td><code>sudo port selfupdate</code></td><td>更新MacPorts程序级源列表</td></tr><tr><td><code>port search package</code></td><td>搜索软件包</td></tr><tr><td><code>sudo port install package</code></td><td>安装软件包</td></tr><tr><td><code>sudo port uninstall package</code></td><td>卸载软件包</td></tr><tr><td><code>port list installed</code></td><td>查看已安装的软件包</td></tr><tr><td><code>port outdated</code></td><td>查看有哪些软件包需要更新</td></tr><tr><td><code>sudo port upgrade outdated</code></td><td>更新所有软件包</td></tr><tr><td><code>sudo port upgrade package</code></td><td>更新指定软件包</td></tr></tbody></table><h1 id="nvm" tabindex="-1">nvm <a class="header-anchor" href="#nvm" aria-hidden="true">#</a></h1><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#F6F6F4;">brew install nvm </span><span style="color:#7B7F8B;"># 下载 nvm</span></span>
<span class="line"><span style="color:#F6F6F4;">brew uninstall nvm </span><span style="color:#F286C4;">&amp;&amp;</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">cd</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">~</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">&amp;&amp;</span><span style="color:#F6F6F4;"> rm -rf .nvm </span><span style="color:#7B7F8B;"># 卸载nvm</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><table><thead><tr><th>命令</th><th>备注</th></tr></thead><tbody><tr><td><code>nvm ls-remote</code></td><td>列出所有可安装的版本</td></tr><tr><td><code>nvm install &lt;version&gt;</code></td><td>安装指定的版本，如 nvm install v8.14.0</td></tr><tr><td><code>nvm uninstall &lt;version&gt;</code></td><td>卸载指定的版本</td></tr><tr><td><code>nvm ls</code></td><td>列出所有已经安装的版本</td></tr><tr><td><code>nvm use &lt;version&gt;</code></td><td>切换使用指定的版本</td></tr><tr><td><code>nvm current</code></td><td>显示当前使用的版本</td></tr><tr><td><code>nvm alias default &lt;version&gt;</code></td><td>设置默认 node 版本</td></tr><tr><td><code>nvm deactivate</code></td><td>解除当前版本绑定</td></tr></tbody></table><h1 id="node" tabindex="-1">Node <a class="header-anchor" href="#node" aria-hidden="true">#</a></h1><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#F6F6F4;">sudo rm -rf /usr/local/{bin/{node,npm},lib/node_modules/npm,lib/node,share/man/</span><span style="color:#F286C4;">*</span><span style="color:#F6F6F4;">/node.</span><span style="color:#F286C4;">*</span><span style="color:#F6F6F4;">} </span><span style="color:#7B7F8B;"># pkg安装nodejs方式 卸载</span></span>
<span class="line"><span style="color:#F286C4;">export</span><span style="color:#F6F6F4;"> NODE_OPTIONS=--openssl-legacy-provider </span><span style="color:#7B7F8B;"># &lt;&lt;&lt; open SSL 3.0 &lt;&lt;&lt;  降级保证最新nodejs18正常运行</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h1 id="更新了hosts文件立刻生效" tabindex="-1">更新了hosts文件立刻生效 <a class="header-anchor" href="#更新了hosts文件立刻生效" aria-hidden="true">#</a></h1><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#F6F6F4;">sudo vim /etc/hosts</span></span>
<span class="line"><span style="color:#F6F6F4;">sudo killall -HUP mDNSResponder</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h1 id="mac-vscode更新失败问题" tabindex="-1">Mac VSCode更新失败问题 <a class="header-anchor" href="#mac-vscode更新失败问题" aria-hidden="true">#</a></h1><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#7B7F8B;"># 1</span></span>
<span class="line"><span style="color:#F6F6F4;">sudo chown -R </span><span style="color:#BF9EEE;">$USER</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">~</span><span style="color:#F6F6F4;">/Library/Caches/com.microsoft.VSCode.ShipIt</span><span style="color:#F286C4;">;</span><span style="color:#7B7F8B;"># 输入密码</span></span>
<span class="line"><span style="color:#7B7F8B;"># 2</span></span>
<span class="line"><span style="color:#F6F6F4;">xattr -dr com.apple.quarantine /Applications/Visual</span><span style="color:#F286C4;">\\ </span><span style="color:#F6F6F4;">Studio</span><span style="color:#F286C4;">\\ </span><span style="color:#F6F6F4;">Code.app</span><span style="color:#F286C4;">;</span><span style="color:#7B7F8B;"># 稳定版软件包路径</span></span>
<span class="line"><span style="color:#7B7F8B;"># or</span></span>
<span class="line"><span style="color:#F6F6F4;">xattr -dr com.apple.quarantine /Applications/Visual</span><span style="color:#F286C4;">\\ </span><span style="color:#F6F6F4;">Studio</span><span style="color:#F286C4;">\\ </span><span style="color:#F6F6F4;">Code</span><span style="color:#F286C4;">\\ </span><span style="color:#F6F6F4;">-</span><span style="color:#F286C4;">\\ </span><span style="color:#F6F6F4;">Insiders.app/</span><span style="color:#7B7F8B;"># 预览版软件包路径</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h1 id="mac下mysql" tabindex="-1">Mac下Mysql <a class="header-anchor" href="#mac下mysql" aria-hidden="true">#</a></h1><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#F6F6F4;">sudo /usr/local/mysql/support-files/mysql.server start </span><span style="color:#7B7F8B;"># 启动服务</span></span>
<span class="line"><span style="color:#F6F6F4;">sudo /usr/local/mysql/support-files/mysql.server restart </span><span style="color:#7B7F8B;"># 重启服务</span></span>
<span class="line"><span style="color:#F6F6F4;">sudo /usr/local/mysql/support-files/mysql.server stop </span><span style="color:#7B7F8B;"># 关闭服务</span></span>
<span class="line"><span style="color:#7B7F8B;"># mysql.server 配置环境变量 方便之后每次的 开启、停止 和 重启，就不用像上面中命令一样每次都要加路径</span></span>
<span class="line"><span style="color:#F6F6F4;">vim </span><span style="color:#F286C4;">~</span><span style="color:#F6F6F4;">/.base_profile </span><span style="color:#7B7F8B;"># 打开 .bash_profile 添加 mysql.server 路径</span></span>
<span class="line"><span style="color:#F286C4;">export</span><span style="color:#F6F6F4;"> MYSQL_HOME=/usr/local/mysql </span><span style="color:#7B7F8B;"># 添加</span></span>
<span class="line"><span style="color:#F286C4;">export</span><span style="color:#F6F6F4;"> PATH=</span><span style="color:#BF9EEE;">\${PATH}</span><span style="color:#F6F6F4;">:</span><span style="color:#BF9EEE;">\${MYSQL_HOME}</span><span style="color:#F6F6F4;">/support-files  </span><span style="color:#7B7F8B;"># 添加</span></span>
<span class="line"><span style="color:#97E1F1;">source</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">!</span><span style="color:#F6F6F4;">/.bash_profile </span><span style="color:#7B7F8B;"># 保存.bash_profile后使用 source 命令让 刚才的改动生效</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h1 id="ruby-gem" tabindex="-1">Ruby Gem <a class="header-anchor" href="#ruby-gem" aria-hidden="true">#</a></h1><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#7B7F8B;"># 安装rvm</span></span>
<span class="line"><span style="color:#F6F6F4;">$ curl -L get.rvm.io </span><span style="color:#F286C4;">|</span><span style="color:#F6F6F4;"> bash -s stable</span></span>
<span class="line"><span style="color:#7B7F8B;"># 查看当前版本</span></span>
<span class="line"><span style="color:#F6F6F4;">$ rvm -v</span></span>
<span class="line"><span style="color:#7B7F8B;"># 卸载rvm (执行会彻底删除 .rvm 目录，从而删除 rvm)</span></span>
<span class="line"><span style="color:#F6F6F4;">$ rvm implode</span></span>
<span class="line"><span style="color:#7B7F8B;"># 查看gem版本</span></span>
<span class="line"><span style="color:#F6F6F4;">$ gem -v</span></span>
<span class="line"><span style="color:#7B7F8B;"># 查看ruby源</span></span>
<span class="line"><span style="color:#F6F6F4;">$ gem sources -l</span></span>
<span class="line"><span style="color:#7B7F8B;"># 更新gem版本</span></span>
<span class="line"><span style="color:#F6F6F4;">$ gem update --system</span></span>
<span class="line"><span style="color:#7B7F8B;"># 删除镜像源</span></span>
<span class="line"><span style="color:#F6F6F4;">$ gem sources --remove  https://gems.ruby-china.org/</span></span>
<span class="line"><span style="color:#7B7F8B;"># 添加镜像源</span></span>
<span class="line"><span style="color:#F6F6F4;">gem sources --add  https://gems.ruby-china.com/</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><table><thead><tr><th>命令</th><th>备注</th></tr></thead><tbody><tr><td><code>gem install mygem</code></td><td>安装</td></tr><tr><td><code>gem uninstall mygem</code></td><td>卸载</td></tr><tr><td><code>gem list --local</code></td><td>列出已安装的gem</td></tr><tr><td><code>gem list --remote</code></td><td>列出可用的gem</td></tr><tr><td><code>gem rdoc --all</code></td><td>为所有的gems创建RDoc文档</td></tr><tr><td><code>gem fetch mygem</code></td><td>下载一个gem，但不安装</td></tr><tr><td><code>gem search STRING --remote</code></td><td>从可用的gem中搜索</td></tr><tr><td><code>nvm deactivate</code></td><td>解除当前版本绑定</td></tr></tbody></table>`,38),r=[p];function o(t,c,d,i,b,F){return a(),n("div",null,r)}const m=s(l,[["render",o]]);export{u as __pageData,m as default};
