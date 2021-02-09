module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                    @import "@/src/assets/app/scss/style.scss";
                `
            }
        }
    }
}