import { test, expect } from '@playwright/test';
test('filters, dialogs, identity and contact validation', async ({ page }) => {
 const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://localhost:3000');
 await expect(page.locator('h1')).toContainText('Building Intelligent');
 await page.getByRole('button',{name:'Fintech',exact:true}).click();
 await expect(page.locator('.project-card')).toHaveCount(1);
 await page.getByRole('button',{name:'Explore KoriePay case study'}).click();
 await expect(page.locator('dialog')).toBeVisible();
 await expect(page.locator('dialog')).toContainText('Outcome not yet independently documented');
 await page.keyboard.press('Escape');await expect(page.locator('dialog')).not.toBeVisible();
 await page.getByRole('button',{name:'All Projects',exact:true}).click();await expect(page.locator('.project-card')).toHaveCount(7);
 await page.getByRole('button',{name:'Databases & Data',exact:true}).click();await expect(page.locator('.skill-tile')).toHaveCount(4);
 await page.locator('.skill-tile').first().click();await expect(page.locator('.skill-detail')).toContainText('MySQL');
 await page.getByRole('button',{name:'Show all',exact:true}).click();await expect(page.locator('.skill-tile')).toHaveCount(36);
 await page.getByRole('button',{name:'A little more about my approach'}).click();await expect(page.locator('.expanded-bio')).toBeVisible();
 await page.locator('.contact-form button[type=submit]').click();await expect(page.locator('input[name=name]')).toBeFocused();await expect(page.locator('.email-notice')).toHaveCount(0);
 expect(errors).toEqual([]);
});
test('responsive layouts, mobile navigation and reduced motion',async({page})=>{
 await page.emulateMedia({reducedMotion:'reduce'});
 for(const width of [360,390,768,1440]){await page.setViewportSize({width,height:900});await page.goto('http://localhost:3000');expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBeTruthy();}
 await page.setViewportSize({width:390,height:844});await page.getByRole('button',{name:'Open navigation'}).click();await page.locator('.nav-links').getByRole('link',{name:'About',exact:true}).click();await expect(page.locator('.mobile-toggle')).toHaveAttribute('aria-expanded','false');
});
