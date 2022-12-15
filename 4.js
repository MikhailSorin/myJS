function isInStrictMode() {
    try {
        this.caller; // expected to throw
        return false;
    } catch(e) {
        return true;
    }
}