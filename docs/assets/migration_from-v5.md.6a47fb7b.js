import{_ as s,o as a,c as n,S as l}from"./chunks/framework.83660acb.js";const f=JSON.parse('{"title":"Migration from v5","description":"Migration guide for migrating from v5 to v6 and notifying of breaking changes","frontmatter":{"lang":"en-US","title":"Migration from v5","description":"Migration guide for migrating from v5 to v6 and notifying of breaking changes"},"headers":[],"relativePath":"migration/from-v5.md","filePath":"migration/from-v5.md"}'),p={name:"migration/from-v5.md"},o=l(`<h1 id="migrating-from-v5" tabindex="-1">Migrating from v5 <a class="header-anchor" href="#migrating-from-v5" aria-label="Permalink to &quot;Migrating from v5&quot;">​</a></h1><h2 id="breaking-changes" tabindex="-1">Breaking changes <a class="header-anchor" href="#breaking-changes" aria-label="Permalink to &quot;Breaking changes&quot;">​</a></h2><ul><li><code>month-picker</code> and <code>year-picker</code> no longer have predefined value if <code>v-model</code> is empty</li><li><code>aria-label</code> for arrow buttons in <code>month-picker</code> mode is changed to Next/Previous year</li><li><code>auto-apply-month</code> prop is removed (will work with <code>auto-apply</code> prop set)</li><li><code>show-now-button</code> prop is removed</li><li><a href="/slots/components/#month-year"><code>month-year</code></a> slot will have different props depending on the used mode</li><li>Property <code>handleMonthYearChange</code> is removed from <code>sidebar-[left/right]</code> slot props</li><li>Props changes (check <a href="#props-reconfiguration">props-reconfiguration</a>) <ul><li><strong>Removed</strong>: <ul><li><a href="#multi-calendars-solo-and-multi-static"><code>multi-calendars-solo</code></a></li><li><a href="#multi-calendars-solo-and-multi-static"><code>multi-static</code></a></li><li><a href="#text-input-options"><code>text-input-options</code></a></li><li><a href="#inline-with-input"><code>inline-with-input</code></a></li><li><a href="#preset-ranges"><code>preset-ranges</code></a><ul><li>Exposed method for the slot is renamed from <code>presetDateRange</code> to <code>presetDate</code></li></ul></li><li>Property <code>menuAppear</code> in <a href="#transitions"><code>transitions</code></a></li></ul></li></ul></li></ul><h2 id="props-reconfiguration" tabindex="-1">Props reconfiguration <a class="header-anchor" href="#props-reconfiguration" aria-label="Permalink to &quot;Props reconfiguration&quot;">​</a></h2><p>Based on the list of removed props, and depending on your usage, you might need to do a slight adjustments to keep prior behaviour:</p><h3 id="multi-calendars-solo-and-multi-static" tabindex="-1"><code>multi-calendars-solo</code> and <code>multi-static</code> <a class="header-anchor" href="#multi-calendars-solo-and-multi-static" aria-label="Permalink to &quot;\`multi-calendars-solo\` and \`multi-static\`&quot;">​</a></h3><p>These 2 props are now merged into a configuration object that can be passed</p><p>to <code>multi-calendars</code> prop</p><div class="info custom-block"><p class="custom-block-title">Info</p><p>For prop definition, check <a href="/props/modes/#multi-calendars"><code>multi-calendars</code></a> prop</p></div><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">VueDatePicker</span></span>
<span class="line diff remove"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">multi-calendars</span><span style="color:#E1E4E8;">  </span></span>
<span class="line diff remove"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">multi-calendars-solo</span><span style="color:#E1E4E8;">  </span></span>
<span class="line diff remove"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">:multi-static</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;false&quot;</span><span style="color:#E1E4E8;">  </span></span>
<span class="line diff add"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">:multi-calendars</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{ solo: true, static: false }&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">  /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">VueDatePicker</span></span>
<span class="line diff remove"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">multi-calendars</span><span style="color:#24292E;">  </span></span>
<span class="line diff remove"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">multi-calendars-solo</span><span style="color:#24292E;">  </span></span>
<span class="line diff remove"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">:multi-static</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;false&quot;</span><span style="color:#24292E;">  </span></span>
<span class="line diff add"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">:multi-calendars</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{ solo: true, static: false }&quot;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">  /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h3 id="text-input-options" tabindex="-1"><code>text-input-options</code> <a class="header-anchor" href="#text-input-options" aria-label="Permalink to &quot;\`text-input-options\`&quot;">​</a></h3><p><code>text-input-options</code> prop is removed and can now be passed directly to the <code>text-input</code> prop as a second parameter</p><div class="info custom-block"><p class="custom-block-title">Info</p><p>For prop definition, check <a href="/props/modes/#text-input"><code>text-input</code></a> prop</p></div><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">VueDatePicker</span></span>
<span class="line diff remove"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">text-input</span><span style="color:#E1E4E8;">  </span></span>
<span class="line diff remove"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">:text-input-options</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{ format: &#39;MM.dd.yyyy HH:mm&#39; }&quot;</span><span style="color:#E1E4E8;">  </span></span>
<span class="line diff add"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">:text-input</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{ format: &#39;MM.dd.yyyy HH:mm&#39; }&quot;</span><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">VueDatePicker</span></span>
<span class="line diff remove"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">text-input</span><span style="color:#24292E;">  </span></span>
<span class="line diff remove"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">:text-input-options</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{ format: &#39;MM.dd.yyyy HH:mm&#39; }&quot;</span><span style="color:#24292E;">  </span></span>
<span class="line diff add"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">:text-input</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{ format: &#39;MM.dd.yyyy HH:mm&#39; }&quot;</span><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h3 id="transitions" tabindex="-1"><code>transitions</code> <a class="header-anchor" href="#transitions" aria-label="Permalink to &quot;\`transitions\`&quot;">​</a></h3><p>Property <code>menuAppear</code> in <code>transition</code> prop is removed and replaced with 2 additional properties, <code>menuAppearTop</code> and <code>menuAppearBottom</code></p><div class="info custom-block"><p class="custom-block-title">Info</p><p>For prop definition, check <a href="/props/look-and-feel/#transitions"><code>transitions</code></a> prop</p></div><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">VueDatePicker</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:transitions</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;transitions&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">transitions</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line diff remove"><span style="color:#E1E4E8;">    menuAppear: </span><span style="color:#9ECBFF;">&#39;my-custom-transition&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line diff add"><span style="color:#E1E4E8;">    menuAppearTop: </span><span style="color:#9ECBFF;">&#39;open-on-top-transition&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line diff add"><span style="color:#E1E4E8;">    menuAppearBottom: </span><span style="color:#9ECBFF;">&#39;open-on-bottom-transition&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">VueDatePicker</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:transitions</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;transitions&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">transitions</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line diff remove"><span style="color:#24292E;">    menuAppear: </span><span style="color:#032F62;">&#39;my-custom-transition&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line diff add"><span style="color:#24292E;">    menuAppearTop: </span><span style="color:#032F62;">&#39;open-on-top-transition&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line diff add"><span style="color:#24292E;">    menuAppearBottom: </span><span style="color:#032F62;">&#39;open-on-bottom-transition&#39;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h3 id="inline-with-input" tabindex="-1">inline-with-input <a class="header-anchor" href="#inline-with-input" aria-label="Permalink to &quot;inline-with-input&quot;">​</a></h3><p>Configuration object with <code>input: true</code> can be passed to <code>inline</code> prop</p><div class="info custom-block"><p class="custom-block-title">Info</p><p>For prop definition, check <a href="/props/modes/#inline"><code>inline</code></a> prop</p></div><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">VueDatePicker</span></span>
<span class="line diff remove"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">inline</span><span style="color:#E1E4E8;">  </span></span>
<span class="line diff remove"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">inline-with-input</span><span style="color:#E1E4E8;">  </span></span>
<span class="line diff add"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">:inline</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{ input: true }&quot;</span><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">VueDatePicker</span></span>
<span class="line diff remove"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">inline</span><span style="color:#24292E;">  </span></span>
<span class="line diff remove"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">inline-with-input</span><span style="color:#24292E;">  </span></span>
<span class="line diff add"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">:inline</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{ input: true }&quot;</span><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h3 id="preset-ranges" tabindex="-1"><code>preset-ranges</code> <a class="header-anchor" href="#preset-ranges" aria-label="Permalink to &quot;\`preset-ranges\`&quot;">​</a></h3><ul><li>Prop <code>preset-ranges</code> is renamed to <code>preset-dates</code></li><li>Property <code>range</code> is renamed to <code>value</code></li></ul><div class="info custom-block"><p class="custom-block-title">Info</p><p>For prop definition, check <a href="/props/modes-configuration/#preset-dates"><code>preset-dates</code></a> prop</p></div><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">VueDatePicker</span></span>
<span class="line diff remove"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">:preset-ranges</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;presetValues&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line diff add"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">:preset-dates</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;presetValues&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">  /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">presetValues</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line diff remove"><span style="color:#E1E4E8;">    { label: </span><span style="color:#9ECBFF;">&#39;Today&#39;</span><span style="color:#E1E4E8;">, range: [</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Date</span><span style="color:#E1E4E8;">(), </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Date</span><span style="color:#E1E4E8;">()] }, </span></span>
<span class="line diff add"><span style="color:#E1E4E8;">    { label: </span><span style="color:#9ECBFF;">&#39;Today&#39;</span><span style="color:#E1E4E8;">, value: [</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Date</span><span style="color:#E1E4E8;">(), </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Date</span><span style="color:#E1E4E8;">()] }, </span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">VueDatePicker</span></span>
<span class="line diff remove"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">:preset-ranges</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;presetValues&quot;</span><span style="color:#24292E;"> </span></span>
<span class="line diff add"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">:preset-dates</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;presetValues&quot;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">  /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">presetValues</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line diff remove"><span style="color:#24292E;">    { label: </span><span style="color:#032F62;">&#39;Today&#39;</span><span style="color:#24292E;">, range: [</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Date</span><span style="color:#24292E;">(), </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Date</span><span style="color:#24292E;">()] }, </span></span>
<span class="line diff add"><span style="color:#24292E;">    { label: </span><span style="color:#032F62;">&#39;Today&#39;</span><span style="color:#24292E;">, value: [</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Date</span><span style="color:#24292E;">(), </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Date</span><span style="color:#24292E;">()] }, </span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,26),e=[o];function t(c,r,i,E,y,d){return a(),n("div",null,e)}const m=s(p,[["render",t]]);export{f as __pageData,m as default};
