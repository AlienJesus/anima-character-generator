const { chromium } = require('playwright');
const pixelmatch = require('pixelmatch');

function delay(time) {
  return new Promise(function(resolve) { 
      setTimeout(resolve, time)
  });
}

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  // Open new page
  const page = await context.newPage();
  // Go to https://ollytdev.github.io/anima-character-generator/#
  await page.goto('https://ollytdev.github.io/anima-character-generator/#');
  await delay(1000);
  // Click text=Proceed
  await page.click('text=Proceed');

  // 5x click STR
  // await page.click('text=STR 5 DEX 5 AGI 5 CON 5 INT 5 POW 5 WP 5 PER 5 Total 40 Appearance 5 >> button');
  // await page.click('text=STR 6 DEX 5 AGI 5 CON 5 INT 5 POW 5 WP 5 PER 5 Total 41 Appearance 5 >> button');
  // Click text=STR 7 DEX 10 AGI 5 CON 5 INT 5 POW 5 WP 5 PER 5 Total 48 Appearance 5 >> button
  // await page.click('text=STR 7 DEX 5 AGI 5 CON 5 INT 5 POW 5 WP 5 PER 5 Total 42 Appearance 5 >> button');
  // Click text=STR 8 DEX 10 AGI 5 CON 5 INT 5 POW 5 WP 5 PER 5 Total 49 Appearance 5 >> button
  // await page.click('text=STR 8 DEX 5 AGI 5 CON 5 INT 5 POW 5 WP 5 PER 5 Total 43 Appearance 5 >> button');
  // Click text=STR 9 DEX 10 AGI 5 CON 5 INT 5 POW 5 WP 5 PER 5 Total 50 Appearance 5 >> button
  // await page.click('text=STR 9 DEX 5 AGI 5 CON 5 INT 5 POW 5 WP 5 PER 5 Total 44 Appearance 5 >> button');

  // 5x click #DEX button
  await page.click('#DEX button', {
    clickCount: 5
  });
  // 5x click #AGI button
  await page.click('#AGI button', {
    clickCount: 5
  });
  // 5x click #CON button
  await page.click('#CON button', {
    clickCount: 5
  });
  // 5x click #INT button
  await page.click('#INT button', {
    clickCount: 5
  });
  // 5x click #POW button
  await page.click('#POW button', {
    clickCount: 5
  });
  // 5x click #WP button
  await page.click('#WP button', {
    clickCount: 5
  });
  // 5x click #PER button
  await page.click('#PER button', {
    clickCount: 5
  });

  // Select Male
  await page.selectOption('select[name="Gender"]', 'Male');
  // Select Warrior
  await page.selectOption('select[name="first_class"]', 'Warrior');
  // Fill input[name="Name"]
  await page.fill('input[name="Name"]', 'Maxed Guard');
  // Click text=Choose Advantages
  await page.click('text=Choose Advantages');
  // Click text=Creation Points (3 Common remaining out of 3) Advantages Disadvantages >> i
  await page.click('text=Creation Points (3 Common remaining out of 3) Advantages Disadvantages >> i');
  // Click text=Quick Reflexes
  await page.click('text=Quick Reflexes');
  // Click #advantage_cost_dialog >> text=OK
  await page.click('#advantage_cost_dialog >> text=OK');
  // Click text=Advantages Quick Reflexes (1) Disadvantages >> i
  await page.click('text=Advantages Quick Reflexes (1) Disadvantages >> i');
  // Click text=Fortunate
  await page.click('text=Fortunate');
  // Click text=Advantages Quick Reflexes (1), Fortunate Disadvantages >> i
  await page.click('text=Advantages Quick Reflexes (1), Fortunate Disadvantages >> i');
  // Click text=Hard to Kill
  await page.click('text=Hard to Kill');
  // Click #advantage_cost_dialog >> text=OK
  await page.click('#advantage_cost_dialog >> text=OK');
  // Click text=Choose Abilities
  await page.click('text=Choose Abilities');
  // Click text=600 DP remaining (Limits: 360 Combat, 300 Psychic, 300 Supernatural, 600 Other)D >> i
  await page.click('text=600 DP remaining (Limits: 360 Combat, 300 Psychic, 300 Supernatural, 600 Other)D >> i');
  // Click #Combat_Abilities >> text=Attack
  await page.click('#Combat_Abilities >> text=Attack');
  // Click text=OK
  await page.click('text=OK');
  // Click text=450 DP remaining (Limits: 210 Combat, 300 Psychic, 300 Supernatural, 450 Other)D >> i
  await page.click('text=450 DP remaining (Limits: 210 Combat, 300 Psychic, 300 Supernatural, 450 Other)D >> i');
  // Click #Combat_Abilities >> text=Block
  await page.click('#Combat_Abilities >> text=Block');
  // Click text=OK
  await page.click('text=OK');
  // Click text=Attack (+75), Block (+75) >> i
  await page.click('text=Attack (+75), Block (+75) >> i');
  // Click span:has-text("Wear Armor")
  await page.click('span:has-text("Wear Armor")');
  // Click text=OK
  await page.click('text=OK');
  // Click text=Attack (+75), Block (+75), Wear Armor (+30) >> i
  await page.click('text=Attack (+75), Block (+75), Wear Armor (+30) >> i');
  // Click a:has-text("Secondary Abilities")
  await page.click('a:has-text("Secondary Abilities")');
  // Click text=Feats of Strength
  await page.click('text=Feats of Strength');
  // Click text=OK
  await page.click('text=OK');

  await delay(1000);
  await page.evaluate(() => window.scrollTo(0, 0));



  await page.screenshot({path: "maxedGuardRes.png"});
  // ---------------------
  await context.close();
  await browser.close();
})();