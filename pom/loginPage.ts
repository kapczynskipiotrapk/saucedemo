import { expect, Page } from "@playwright/test"

export class LoginPage {
    page: Page


    constructor(page: Page) {
        this.page = page
    }

    public async goTo() {
       await this.page.goto("https://youtube.com")

    }

    public async isVideoPlaying(): Promise<boolean> {
        return await this.page.evaluate(() => {
            const v = document.querySelectorAll('.video-stream')[1] as HTMLVideoElement;
            return !v.paused;
        });
    }
}
