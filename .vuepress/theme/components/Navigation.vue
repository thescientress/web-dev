<template>
    <header>
        <section class="main-nav">
            <div class="logo">
                <a :href="$withBase('/')">
                    <img src="../../../img/logo.svg" alt="Aeternity">
                </a>
            </div>
            <nav class="pages">
                <ul class="nav-items">
                    <li class="nav-item nav-current">
                        <a href="" class="nav-link">Developers</a>
                    </li>
                    <li class="nav-item">
                        <a href="https://www.aeventures.io" class="nav-link" target="_blank">Entrepreneurs</a>
                    </li>
                    <li class="nav-item">
                        <a href="https://www.aeternityconsulting.com" class="nav-link" target="_blank">Consulting</a>
                    </li>
                    <li class="nav-item">
                        <a href="https://forum.aeternity.com" class="nav-link" target="_blank">Community</a>
                    </li>
                    <li class="nav-item">
                        <a href="https://www.aeternity-foundation.org" class="nav-link" target="_blank">Foundation</a>
                    </li>
                </ul>
            </nav>
            <div class="lang-switcher">
                <button type="button" class="lang-current">ENG</button>
                <div class="lang-menu">
                    <ul class="lang-items">
                        <li class="lang-item">
                            <a class="lang-link" href="#" onclick="return false">English</a>
                        </li>
                        <li class="lang-item">
                            <a class="lang-link" onclick="return false">Español</a>
                        </li>
                        <li class="lang-item">
                            <a class="lang-link" onclick="return false">Русский</a>
                        </li>
                        <li class="lang-item">
                            <a class="lang-link" onclick="return false">中文 (简体)</a>
                        </li>
                        <li class="lang-item">
                            <a class="lang-link" onclick="return false">日本語</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </header>
</template>
