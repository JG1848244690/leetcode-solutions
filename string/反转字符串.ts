function reverseString(s: string[]): void {
    let left = 0,
        right = s.length - 1;
    while (left < right) {
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
}

const s = ['h', 'e', 'l', 'l', 'o'];
reverseString(s);
console.log(s);