<template>
  <footer class="mt-8 bg-primary-100 text-gray-400">
    <div class="container mx-auto flex flex-col items-center px-5 py-8 sm:flex-row">
      <router-link to="/" class="flex items-center justify-center font-medium text-white md:justify-start">
        <img src="@/images/logo.png" alt="" class="w-[150px]" />
      </router-link>
      <p class="mt-4 text-sm text-gray-400 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-primary-200 sm:py-2 sm:pl-4">
        © 2023
      </p>
      <p class="mt-4 text-sm text-gray-400 sm:ml-4 sm:mt-0 sm:py-2">
        Cyborg —
        <a
          href="https://vk.com/milleyz"
          class="ml-1 text-gray-500 transition-colors hover:text-primary-200"
          target="_blank"
          rel="noopener noreferrer"
          >@milleyz</a
        >
      </p>
      <p class="mt-4 text-sm text-gray-400 sm:ml-4 sm:mt-0 sm:py-2">
        Design —
        <a
          href="https://templatemo.com/"
          class="ml-1 text-gray-500 transition-colors hover:text-primary-200"
          target="_blank"
          rel="noopener noreferrer"
          >TemplateMo</a
        >
      </p>
      <span class="mt-4 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
        <a
          href="https://vk.com/milleyz"
          target="_blank"
          rel="noopener noreferrer"
          class="ml-3 text-gray-66 transition-colors hover:text-primary-200"
        >
          <i class="bx bx-md bxl-vk"></i>
        </a>
        <a
          href="https://github.com/milley69"
          target="_blank"
          rel="noopener noreferrer"
          class="ml-3 text-gray-66 transition-colors hover:text-primary-200"
        >
          <i class="bx bx-md bxl-github"></i>
        </a>
      </span>
    </div>
  </footer>
</template>
