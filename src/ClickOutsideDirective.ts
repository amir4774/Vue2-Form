import type { DirectiveBinding } from "vue";

interface HTMLElementWithClickOutsideEvent extends HTMLElement {
  clickOutsideEvent?: (event: MouseEvent) => void;
}

export default {
  beforeMount(el: HTMLElementWithClickOutsideEvent, binding: DirectiveBinding) {
    el.clickOutsideEvent = (event: MouseEvent) => {
      // Check if the clicked element is neither the element
      // to which the directive is applied nor its child
      if (!(el === event.target || el.contains(event.target as Node))) {
        // Invoke the provided method
        binding.value(event);
      }
    };
    document.addEventListener("click", el.clickOutsideEvent);
    document.addEventListener("contextmenu", el.clickOutsideEvent);
  },
  unmounted(el: HTMLElementWithClickOutsideEvent) {
    // Remove the event listener when the bound element is unmounted
    if (el.clickOutsideEvent) {
      document.removeEventListener("click", el.clickOutsideEvent);
      document.removeEventListener("contextmenu", el.clickOutsideEvent);
    }
  },
};
