

<script setup>



</script>

<template>
    <nav class="navbar navbar-default navbar-fixed-top navigation-top" id="navigation-fixed">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-fixed">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand nav-logo top" href="/">
                    <img src="@/assets/images/logotype-fixed.jpg" alt="Профремонт">
                </a>
            </div>
            <div id="navbar-collapse-fixed" class="collapse navbar-collapse">
                <ul id="menu-main-menu" class="nav navbar-nav navbar-left">
                    <li class="hidden">
                        <a href="#header">&nbsp;</a>
                    </li>
                    <li>
                        <a href="#offer">Информация</a>
                    </li>
                    <li>
                        <a href="#benefits">Выгоды</a>
                    </li>
                    <li>
                        <a href="#services">Услуги</a>
                    </li>
                    <li>
                        <a href="#reviews">Отзывы</a>
                    </li>
                    <li>
                        <a href="#about">Как заказать</a>
                    </li>
                    <li>
                        <a href="#documents">Сертификаты</a>
                    </li>
                    <li>
                        <a href="#contacts">Контакты</a>
                    </li>
                </ul>
                <div class="navbar-order hidden-xs clearfix">
                    <div class="phone pull-left hidden-md">
                        <a href="tel:89876543210">+7 (987) <strong>654-32-10</strong></a>
                    </div>
                    <div class="top-btn pull-left">
                        <a href="#callback" class="btn btn-warning btn-md fancyboxModal">Заказать звонок!</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>