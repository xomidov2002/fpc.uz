<script setup lang="ts">
import { ref, watch } from 'vue';
import BaseButton from '@/components/BaseButton/index.vue';
import BaseIcon from '@/components/Icons/index.vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const phone = ref('');
const name = ref('');
const message = ref('');

const errorMessage = ref('');
const successMessage = ref('');
const isSubmitting = ref(false);

// Reactive property to control the visibility of the message
const showSuccessMessage = ref(false);
const showErrorMessage = ref(false);

const validateFields = () => {
  if (!phone.value || !name.value || !message.value) {
    errorMessage.value = t('mainPage.fillAllFields');
    showErrorMessage.value = true;
    setTimeout(() => {
      showErrorMessage.value = false;
    }, 2000); // Error message disappears after 2 seconds
    return false;
  }
  return true;
};

const sendMessage = async () => {
  if (!validateFields()) {
    return;
  }

  isSubmitting.value = true;
  errorMessage.value = '';
  successMessage.value = '';
  showSuccessMessage.value = false;
  showErrorMessage.value = false;

  const url = 'https://api.telegram.org/bot6760739912:AAFVrqguAFvYZ1cDFjCCJyK2cFSoTTatgIM/sendMessage';
  const data = {
    chat_id: '-4102543534',
    text: `New client: \nFull name - ${name.value}, \nPhone number - ${phone.value}, \nMessage - ${message.value}`
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Xatolik yuz berdi');
    }

    const responseData = await response.json();
    console.log('Javob:', responseData);
    successMessage.value = t('mainPage.messageSent');
    showSuccessMessage.value = true; // Show the success message
    name.value = '';
    phone.value = '';
    message.value = '';

    // Hide the success message after 2 seconds
    setTimeout(() => {
      showSuccessMessage.value = false;
    }, 2000);
  } catch (error) {
    console.error('Xatolik:', error);
    errorMessage.value = t('mainPage.messageError');
    showErrorMessage.value = true;

    // Hide the error message after 2 seconds
    setTimeout(() => {
      showErrorMessage.value = false;
    }, 2000);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <div class="container mx-auto px-5 py-11">
    <p
      class="text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white px-5 border-l-2 py-5 border-l-blue-600 mb-5">
      {{ t('mainPage.contact') }}
    </p>
    <div class="w-full p-5 flex flex-wrap lg:flex-nowrap lg:justify-evenly items-center relative">
      <div class="p-4 border-[7px] border-[#080D75]">
        <div class="form-container bg-[#14151B]">
          <div class="form">
            <div class="form-group">
              <label for="name">{{ t('mainPage.contactName') }}</label>
              <input v-model="name" name="name" id="name" type="text" />
            </div>
            <div class="form-group">
              <label for="phone">{{ t('mainPage.contactNumber') }}</label>
              <input v-model="phone" name="phone" id="phone" type="text" />
            </div>
            <div class="form-group">
              <label for="message">{{ t('mainPage.contactText') }}</label>
              <textarea v-model="message" name="message" id="message" cols="50" rows="10"></textarea>
            </div>
            <BaseButton @click="sendMessage" :name="isSubmitting ? t('mainPage.sending') : t('mainPage.Submit')" />
            <!-- Notification Messages -->
            <transition name="fade">
              <div class="absolute uppercase -bottom-[30%] -right-[11%] p-5 border-r-8 border-r-[#080D75] bg-[#14151B]"
                v-if="showErrorMessage || showSuccessMessage">
                <p v-if="showErrorMessage" class="text-red-500">{{ errorMessage }}</p>
                <p v-if="showSuccessMessage" class="text-green-500">{{ successMessage }}</p>
              </div>
            </transition>
          </div>
        </div>
      </div>
      <div>
        <p class="font-[semibold] text-white text-2xl tracking-widest pb-11">{{ t('mainPage.contact') }}</p>
        <div class="flex items-center gap-5">
          <BaseIcon name="message" class="w-10 h-10 text-[#080D75]" />
          <p class="text-white tracking-widest">example@gmail.com</p>
        </div>
        <div class="flex py-5 items-center gap-5">
          <BaseIcon name="phone" class="w-10 h-10 text-[#080D75]" />
          <p class="text-white tracking-widest">+998 93 378 63 61</p>
        </div>
        <div class="flex items-center gap-5">
          <BaseIcon name="location" class="w-10 h-10 text-[#080D75]" />
          <p class="text-white tracking-widest">Toshkent, Chilonzor tumani Olmazor massivi 15/10</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form-container {
  width: 100%;
  padding: 32px 24px;
  font-size: 14px;
  color: #252525;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.form-container button:active {
  scale: 0.95;
}

.form-container .form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-container .form-group {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.form-container .form-group label {
  display: block;
  margin-bottom: 5px;
  color: rgb(155, 151, 151);
  font-weight: 600;
  font-size: 12px;
}

.form-container .form-group input {
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  color: white;
  font-family: inherit;
  background-color: transparent;
  border: 1px solid #414141;
}

.form-container .form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  resize: none;
  color: white;
  height: 96px;
  border: 1px solid #414141;
  background-color: transparent;
  font-family: inherit;
}

.form-container .form-group input::placeholder {
  opacity: 0.5;
}

.form-container .form-group input:focus {
  outline: none;
  border-color: white;
}

.form-container .form-group textarea:focus {
  outline: none;
  border-color: white;
}

/* Animation for fade effect */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
