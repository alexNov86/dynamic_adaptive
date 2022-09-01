const da = new DynamicAdapt("max");
da.init();
// const parentCity = document.querySelector(".content__blocks_city");
// const parentRiver = document.querySelector(".content__column_river");
// const item = document.querySelector(".content__block_item");

// window.addEventListener("resize", function (event) {
//   const viewportWidth = Math.max(
//     document.documentElement.clientWidth,
//     window.innerWidth || 0
//   );
//   if (viewportWidth < 992) {
//     if (!item.classList.contains("done")) {
//       parentRiver.insertBefore(item, parentRiver.children[2]);
//       item.classList.add("done");
//     }
//   } else {
//     if (item.classList.contains("done")) {
//       parentCity.insertBefore(item, parentCity.children[2]);
//       item.classList.remove("done");
//     }
//   }
// });
