import { expect, Page } from "@playwright/test"

export class ShortPage {
    page: Page
    constructor(page: Page) {
        this.page = page
    }


    public async isVideoPlaying(): Promise<boolean> {
        return await this.page.evaluate(() => {
            const v = document.querySelectorAll('.video-stream')[1] as HTMLVideoElement;
            return !v.paused;
        });
    }

    public async verifyShortMeta(): Promise<void> {
        await this.page.locator("//div[contains (@class, 'short-video-container')]//video[contains (@class, 'video-stream')]").isVisible()
        await this.page.locator("//div[@id='metapanel']//yt-decorated-avatar-view-model").isVisible();

        const author = await this.page.locator("//div[@id='metapanel']//span[contains (@class, 'ytReelChannelBarViewModelChannelName ')]").textContent()
        console.log("short author is: " + author.toString())
        expect(author).toContain("@")

        const isVideoPlaying = await this.isVideoPlaying()
        expect(isVideoPlaying).toBe(true)
    }
}
