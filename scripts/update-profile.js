#!/usr/bin/env node
// ==============================================================================
// Dynamic GitHub Profile README Synchronizer for @basantzp
// Automatically updates featured projects, recent activity, and latest repositories.
// ==============================================================================

const fs = require('fs');
const path = require('path');
const https = require('https');

const USERNAME = 'basantzp';
const README_PATH = path.join(__dirname, '..', 'README.md');

function fetchGitHub(endpoint) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: endpoint,
      headers: {
        'User-Agent': 'basantzp-profile-updater',
        ...(process.env.GITHUB_TOKEN ? { Authorization: `token ${process.env.GITHUB_TOKEN}` } : {})
      }
    };

    https.get(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          resolve(parsed);
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function main() {
  console.log(`[+] Fetching latest repositories and activity for @${USERNAME}...`);

  try {
    const repos = await fetchGitHub(`/users/${USERNAME}/repos?sort=updated&per_page=15`);
    if (!Array.isArray(repos)) {
      console.error('[-] Failed to fetch repos:', repos);
      return;
    }

    // Filter out profile repo itself and forks if any
    const activeRepos = repos.filter(r => r.name !== USERNAME && !r.fork);

    console.log(`[+] Found ${activeRepos.length} active public repositories.`);

    // Map projects with customized metadata
    const projectMetadata = {
      'bitcoin-testnet-cpp': {
        name: 'bitcoin-testnet-cpp',
        desc: 'High-Performance Bitcoin Core Testnet4 Suite, Block Explorer & Script Opcode VM written natively in C++17.',
        stack: ['C++17', 'OpenSSL', 'Bitcoin Core', 'Testnet4', 'Script VM']
      },
      'ethereum-testnet-bee': {
        name: 'ethereum-testnet-bee',
        desc: 'Full-stack local Ethereum testnet suite featuring custom smart contract deployment pipeline, live block explorer API, and faucet utilities.',
        stack: ['Solidity', 'Hardhat', 'Node.js', 'Express', 'Ethers.js']
      },
      'blockchain-testnet': {
        name: 'blockchain-testnet',
        desc: 'Interactive blockchain testing sandbox with automated CLI runners, transaction inspector, and contract verification framework.',
        stack: ['JavaScript', 'Hardhat', 'Ethers.js', 'REST API']
      },
      'omarchy': {
        name: 'omarchy',
        desc: 'Tailored, hyper-automated Arch Linux & Hyprland environment configured for high-efficiency Web3, scripting, and development workflows.',
        stack: ['Bash', 'Hyprland', 'Waybar', 'Systemd']
      },
      'ac-control-arch-linux': {
        name: 'ac-control-arch-linux',
        desc: 'High-Performance Arch Linux Midea AC Controller, Web Dashboard & Window Manager Integration Suite.',
        stack: ['Python', 'Flask', 'Linux', 'IoT']
      },
      'arch-configuration-i3-easy-setup': {
        name: 'arch-configuration-i3-easy-setup',
        desc: 'Streamlined Arch Linux desktop configuration and automated developer workstation setup.',
        stack: ['Shell', 'i3wm', 'Arch Linux', 'Config']
      }
    };

    let tableRows = '';
    const featuredKeys = ['bitcoin-testnet-cpp', 'ethereum-testnet-bee', 'blockchain-testnet', 'omarchy', 'ac-control-arch-linux'];

    for (const key of featuredKeys) {
      const info = projectMetadata[key];
      const repo = activeRepos.find(r => r.name === key);
      const url = repo ? repo.html_url : `https://github.com/${USERNAME}/${key}`;
      const stackBadges = info.stack.map(s => `\`${s}\``).join(' ');
      tableRows += `| **[${info.name}](${url})** | ${info.desc} | ${stackBadges} | 🟢 Active |\n`;
    }

    // Add any other active repos discovered
    for (const r of activeRepos) {
      if (!featuredKeys.includes(r.name) && r.name !== 'basantzp' && projectMetadata[r.name]) {
        const info = projectMetadata[r.name];
        const stackBadges = info.stack.map(s => `\`${s}\``).join(' ');
        tableRows += `| **[${info.name}](${r.html_url})** | ${info.desc} | ${stackBadges} | 🟢 Active |\n`;
      }
    }

    let readme = fs.readFileSync(README_PATH, 'utf8');

    // Replace Featured Projects Table
    const tableRegex = /<!-- PROJECTS:START -->([\s\S]*?)<!-- PROJECTS:END -->/;
    if (tableRegex.test(readme)) {
      const newSection = `<!-- PROJECTS:START -->\n| Project | Description | Tech Stack | Status |\n| :--- | :--- | :--- | :--- |\n${tableRows}<!-- PROJECTS:END -->`;
      readme = readme.replace(tableRegex, newSection);
      fs.writeFileSync(README_PATH, readme, 'utf8');
      console.log('[✓] README.md updated successfully with latest projects!');
    } else {
      console.log('[!] Projects markers not found in README.md, skipping regex replacement.');
    }

  } catch (err) {
    console.error('[-] Error syncing profile:', err);
  }
}

main();
