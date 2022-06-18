<template>
  <div class="container">
    <div class="loader"></div>
    <div class="loader"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container {
  margin: 0 auto;
  width: 300px;
  height: 300px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d8d8d8;
  border: 4px solid rgba(255, 0, 0, 0.9);
  border-radius: 10%;
}
.loader {
  position: absolute;
  border-radius: 50%;
  border: 10px solid #d8d8d8;
  border-bottom: 10px solid #0000ff;
  animation: load 2s linear infinite;
}
.loader:nth-child(1) {
  width: 100px;
  height: 100px;
}
.loader:nth-child(2) {
  width: 70px;
  height: 70px;
  animation-direction: reverse;
}
@keyframes load {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
