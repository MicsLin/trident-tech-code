<template>
    <main class="w-1/2 h-1/2 relative hover:animate-bounce">
        <div class="bird-head"></div>
        <div class="bird-eye"></div>
        <div class="bird-beak"></div>
        <div class="bird-lower-beak"></div>
        <div class="bird-lower-beak-right"></div>
    </main>
</template>
<style scoped>
.bird-head {
    position: relative;
    width: 100%;
    height: 60%;
}

.bird-head::before {
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 100% 50%;
    background-color: #000;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 50;
}

.bird-head::after {
    content: '';
    width: 150%;
    height: 100%;
    border-radius: 80% 70%;
    background-color: white;
    position: absolute;
    top: 30%;
    left: 0%;
    z-index: 100;
}

.bird-eye {
    position: absolute;
    top: 35%;
    right: 20%;
    width: 25%;
    height: 25%;
    background-color: black;
    border-radius: 50%;
    z-index: 150;
}



.bird-beak {
    position: absolute;
    top: 26%;
    right: -35%;
    width: 40%;
    height: 20%;
    background: white;
    overflow: hidden;
    border-radius: 20%;
    transform: rotate(-10deg);
    z-index: 150;
}

.bird-beak::after {
    content: '';
    position: absolute;
    width: 150%;
    height: 120%;
    right: 0;
    top: 10%;
    border-radius: 50%;
    transform: rotate(20deg);
    background: black;
}

.bird-lower-beak {
    position: absolute;
    bottom: 0;
    width: 70%;
    height: 25%;
    background-color: black;
    z-index: 150;
}

.bird-lower-beak-right {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50%;
    height: 50%;
    border-radius: 100% 50%;
    background-color: black;
    z-index: 110;
}

.bird-lower-beak-right::after {
    content: '';
    position: absolute;
    width: 150%;
    height: 100%;
    right: 0;
    bottom: 45%;
    border-radius: 100% 50%;
    background-color: white;
    transform: rotate(15deg);
    z-index: 2;
}
</style>