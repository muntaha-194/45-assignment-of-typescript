var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// making array for countries in original order
var countriesToVisit = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Original Order:", countriesToVisit);
// printing the array in alphabetical order with modifying the real list
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
// showing te array is in it's original order
console.log("Still in original order:", countriesToVisit);
// printing the array in reverse order with modifying the real list
console.log("Reverse Order:", __spreadArray([], countriesToVisit, true).reverse());
// showing te array is in it's original order
console.log("Still in original order:", countriesToVisit);
// reversing the original array
console.log("Original Array reversed:", countriesToVisit.reverse());
// printing to show that it's back to it's original order
console.log("Back to original order:", countriesToVisit.reverse());
// // printing to show that it's back in alphabetical order now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());
// reversing the original array (again)
console.log("Original Array reversed again:", countriesToVisit.reverse());
