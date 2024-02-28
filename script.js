let cookies = 0;
let autoClickers = 0;
let grandmas = 0;
let farms = 0;
let upgrades = 0;
let maxUpgrades = 8; // Maximum number of upgrades
let cookiesPerClick = 1;
let autoClickInterval;
let autoClickerPrice = 10;
let grandmaPrice = 50;
let farmPrice = 200; // Initial price of the farm
let upgradePrice = 100;
let baseCPSAutoClicker = 1; // Base cookies per second per auto clicker
let baseCPSGrandma = 2; // Base cookies per second per grandma
let baseCPSFarm = 5; // Base cookies per second per farm

function updateScore() {
  document.getElementById("score").innerHTML = "Cookies: " + cookies;
}

function updateCPS() {
  let totalCPS = (autoClickers * baseCPSAutoClicker) + (grandmas * baseCPSGrandma) + (farms * baseCPSFarm);
  document.getElementById("cps").innerHTML = "Cookies per Second: " + totalCPS;
}

function clickCookie() {
  cookies += cookiesPerClick;
  updateScore();
  document.getElementById("cookie").style.transform = "scale(1.1)";
  setTimeout(() => {
    document.getElementById("cookie").style.transform = "scale(1)";
  }, 100);
}

function buyAutoClick() {
  if (cookies >= autoClickerPrice) {
    cookies -= autoClickerPrice;
    autoClickers++;
    autoClickerPrice += Math.ceil(autoClickerPrice * 0.3);
    updateScore();
    updateCPS();
    if (!autoClickInterval) {
      autoClickInterval = setInterval(autoClick, 1000);
    }
    document.getElementById("buyAutoClick").textContent = "Buy Auto Clicker (" + autoClickerPrice + " cookies)";
  } else {
    alert("Not enough cookies!");
  }
}

function buyGrandma() {
  if (cookies >= grandmaPrice) {
    cookies -= grandmaPrice;
    grandmas++;
    grandmaPrice += Math.ceil(grandmaPrice * 0.3);
    updateScore();
    updateCPS();
    document.getElementById("buyGrandma").textContent = "Buy Grandma (" + grandmaPrice + " cookies)";
  } else {
    alert("Not enough cookies!");
  }
}

function buyFarm() {
  if (cookies >= farmPrice) {
    cookies -= farmPrice;
    farms++;
    farmPrice += Math.ceil(farmPrice * 0.4);
    updateScore();
    updateCPS();
    document.getElementById("buyFarm").textContent = "Buy Farm (" + farmPrice + " cookies)";
  } else {
    alert("Not enough cookies!");
  }
}

function buyUpgrade() {
  if (cookies >= upgradePrice && upgrades < maxUpgrades) {
    cookies -= upgradePrice;
    upgrades++;
    upgradePrice += Math.ceil(upgradePrice * 0.5);
    updateScore();
    updateCPS();
    cookiesPerClick *= 2;
    document.getElementById("buyUpgrade").textContent = "Buy Upgrade (" + upgradePrice + " cookies)";
  } else if (upgrades >= maxUpgrades) {
    document.getElementById("buyUpgrade").textContent = "Max Upgrades";
    alert("You've reached the maximum number of upgrades!");
  } else {
    alert("Not enough cookies!");
  }
}

function autoClick() {
  cookies += (autoClickers * baseCPSAutoClicker) + (grandmas * baseCPSGrandma) + (farms * baseCPSFarm);
  updateScore();
}

updateScore();
updateCPS();


