export function hiddenAlert() {
  const el = document.getElementById("alert");
  el.innerHTML = "";
}

export function showAlert(
  message = "مشکلی رخ داده است، مجددا تلاش کنید",
  status = "error"
) {
  const el = document.getElementById("alert");
  el.insertAdjacentHTML(
    "afterbegin",
    `<div class="bg-${status} z-50 p-4 animate-alert rounded-lg fixed w-1/3 min-w-80 top-2 right-1/2">
  <div class="text-${status}-text text-center text-body-1">${message}</div>
</div>`
  );
  setTimeout(() => {
    hiddenAlert();
  }, 4000);
}
