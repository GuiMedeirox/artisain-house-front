import { nextTick } from "vue";

export async function myFetch(request, opts = {}, headers = {}) {
  const config = useRuntimeConfig();

  const options = {
    baseURL: config.public.baseURL,
    headers: {
      ...headers,
    },
    ...(opts || {}),
  };

  let data, error;

  try {
    data = await $fetch(request, options);
  } catch (e) {
    error = e;
  }

  if (error) {
    console.log(error);
  } else {
    console.log("success");
    return data;
  }
}

export async function onFetch(request, opts = {}, headers = {}) {
  await nextTick();
  return myFetch(request, opts, headers);
}