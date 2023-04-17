'use strict';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formPromiseGenerator = document.querySelector('form');
const inputDelay = document.querySelector('[name = "delay"]');
const inputStep = document.querySelector('[name = "step"]');
const inputAmount = document.querySelector('[name = "amount"]');
const btnSubmit = document.querySelector('button');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const status = shouldResolve ? '✅ Fulfilled' : '❌ Rejected';
  const message = `${status} promise ${position} in ${delay}ms`;
  const notifyFunction = shouldResolve ? Notify.success : Notify.failure;
  notifyFunction(message);
}

const handleSubmit = event => {
  event.preventDefault();
  let delay = Number(inputDelay.value);
  const step = Number(inputStep.value);
  const amount = Number(inputAmount.value);
  let position = 0;
  setTimeout(() => {
    position++;
    createPromise(position, delay);
    const timerId = setInterval(() => {
      position++;
      delay += step;
      createPromise(position, delay)
      if (position >= amount) {
        clearInterval(timerId);
      }
    }, step);
  }, delay);
};

formPromiseGenerator.addEventListener('submit', handleSubmit);

inputDelay.style.display = "block";
inputStep.style.display = "block";
inputAmount.style.display = "block";
formPromiseGenerator.style.display = "flex";
formPromiseGenerator.style.gap = "10px";
formPromiseGenerator.style.alignItems = "flex-end";
