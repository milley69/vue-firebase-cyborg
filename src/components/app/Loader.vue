<template>
  <div id="loader"></div>
</template>

<style scoped>
#loader {
  width: 48px;
  height: 48px;
  margin: auto;
  transform: translate(0%, -50%);
}

#loader:before {
  content: '';
  width: 48px;
  height: 5px;
  /* background: #f0808050; */
  background: #e75e8d50;
  position: absolute;
  top: 60px;
  left: 0;
  border-radius: 50%;
  -webkit-animation: shadow324 0.5s linear infinite;
  animation: shadow324 0.5s linear infinite;
}

#loader:after {
  content: '';
  width: 100%;
  height: 100%;
  /* background: #f08080; */
  background: #e75e8d;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 4px;
  -webkit-animation: jump7456 0.5s linear infinite;
  animation: jump7456 0.5s linear infinite;
}

@-webkit-keyframes jump7456 {
  15% {
    border-bottom-right-radius: 3px;
  }

  25% {
    -webkit-transform: translateY(9px) rotate(22.5deg);
    transform: translateY(9px) rotate(22.5deg);
  }

  50% {
    -webkit-transform: translateY(18px) scale(1, 0.9) rotate(45deg);
    transform: translateY(18px) scale(1, 0.9) rotate(45deg);
    border-bottom-right-radius: 40px;
  }

  75% {
    -webkit-transform: translateY(9px) rotate(67.5deg);
    transform: translateY(9px) rotate(67.5deg);
  }

  100% {
    -webkit-transform: translateY(0) rotate(90deg);
    transform: translateY(0) rotate(90deg);
  }
}

@keyframes jump7456 {
  15% {
    border-bottom-right-radius: 3px;
  }

  25% {
    -webkit-transform: translateY(9px) rotate(22.5deg);
    transform: translateY(9px) rotate(22.5deg);
  }

  50% {
    -webkit-transform: translateY(18px) scale(1, 0.9) rotate(45deg);
    transform: translateY(18px) scale(1, 0.9) rotate(45deg);
    border-bottom-right-radius: 40px;
  }

  75% {
    -webkit-transform: translateY(9px) rotate(67.5deg);
    transform: translateY(9px) rotate(67.5deg);
  }

  100% {
    -webkit-transform: translateY(0) rotate(90deg);
    transform: translateY(0) rotate(90deg);
  }
}

@-webkit-keyframes shadow324 {
  0%,
  100% {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }

  50% {
    -webkit-transform: scale(1.2, 1);
    transform: scale(1.2, 1);
  }
}

@keyframes shadow324 {
  0%,
  100% {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }

  50% {
    -webkit-transform: scale(1.2, 1);
    transform: scale(1.2, 1);
  }
}

/* .router-link-exact-active,
.router-link-active {
  color: #e75e8d !important;
} */
</style>
