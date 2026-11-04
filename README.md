<div align="center">

# ⚡ Principal Protocol Engineer & EVM Systems Architect

[![Solidity](https://img.shields.io/badge/Solidity-0.8.28-363636?style=for-the-badge&logo=solidity&logoColor=white)](https://soliditylang.org/)
[![Foundry](https://img.shields.io/badge/Foundry-v1.8.4-E535AB?style=for-the-badge&logo=ethereum&logoColor=white)](https://getfoundry.sh/)
[![Cancun EVM](https://img.shields.io/badge/EVM-Cancun%20(EIP--1153)-3C3C3D?style=for-the-badge&logo=ethereum&logoColor=white)](https://eips.ethereum.org/EIPS/eip-1153)
[![C++17](https://img.shields.io/badge/C++-17-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white)](https://isocpp.org/)
[![Rust](https://img.shields.io/badge/Rust-1.75+-DEA584?style=for-the-badge&logo=rust&logoColor=black)](https://www.rust-lang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](https://opensource.org/licenses/MIT)

<p align="center">
  <b>High-Throughput DeFi Primitives • Cancun EVM Optimization (EIP-1153) • Anti-LVR Uniswap v4 Hooks • Modular Account Abstraction (ERC-4337 / ERC-7579) • ZK Merkle Accumulators • Bitcoin Core Script VM</b><br>
  <i>"In code we trust, on-chain we verify." — Engineering deterministic, gas-optimized, and formally verified blockchain infrastructure from first principles.</i>
</p>

---

</div>

## 🏛️ Flagship Protocol Architectures

| Protocol / System | Architecture & Engineering Focus | Rigor & Testing | Live Deployments |
| :--- | :--- | :--- | :--- |
| **[v4-volatility-fee-hook](https://github.com/basantzp/v4-volatility-fee-hook)** | **Uniswap v4 Dynamic Volatility Fee Hook**<br>Realized tick-variance tracking with exponential moving average decay. Protects liquidity providers against Loss-Versus-Rebalancing (LVR) and toxic MEV arbitrage via automated dynamic swap fee tiers. | **8 / 8 Tests Passing**<br>Foundry Fuzz Testing (`256 runs`)<br>Bit-packed single-slot storage layout | 🌐 **[Live App](https://v4-volatility-fee-hook.vercel.app)**<br>📦 **[GitHub Repo](https://github.com/basantzp/v4-volatility-fee-hook)** |
| **[100-solidity-projects](https://github.com/basantzp/100-solidity-projects)** | **Master Protocol Curriculum (100 Contracts)**<br>Production-ready EVM architecture across 10 pillars: ERC Standards, AMMs, Lending, ZK Groth16, Cancun EIP-1153 transient storage, Diamond Proxies, DAOs, ERC-7579 AA, and Rollup Settlement. | **201 / 201 Tests Passing**<br>Foundry Invariant & Unit Fuzzing<br>Cancun `tstore`/`tload` gas-optimized | 🌐 **[Live Curriculum](https://100-solidity-projects.vercel.app)**<br>📦 **[GitHub Repo](https://github.com/basantzp/100-solidity-projects)** |
| **[bitcoin-testnet-cpp](https://github.com/basantzp/bitcoin-testnet-cpp)** | **High-Performance Bitcoin Core Testnet4 Suite**<br>Modern C++17 Bitcoin suite featuring a step-by-step Opcode Script VM evaluator, SegWit (BIP-173) and Taproot (BIP-350) address generator, multithreaded SHA-256 block miner, and raw transaction deserializer. | **Zero External Dependencies**<br>OpenSSL 3.0+ cryptographic primitives<br>Native C++17 architecture | 📦 **[GitHub Repo](https://github.com/basantzp/bitcoin-testnet-cpp)** |
| **[aether-erc4337-paymaster](https://github.com/basantzp/aether-erc4337-paymaster)** | **Enterprise ERC-4337 Account Abstraction Paymaster**<br>Production AA gas sponsorship paymaster with EIP-712 cryptographic signature verification, Chainlink oracle ERC-20 multi-token payments, and strict invariant state checks. | **Foundry Tested**<br>Stateful invariant validation<br>ERC-4337 v0.7 compliant | 📦 **[GitHub Repo](https://github.com/basantzp/aether-erc4337-paymaster)** |
| **[aegis-zk-accumulator](https://github.com/basantzp/aegis-zk-accumulator)** | **EVM Sparse Merkle Tree Cryptographic Accumulator**<br>High-performance Sparse Merkle Tree (SMT) accumulator and vault written in C11 and Solidity for efficient zero-knowledge membership proofs and stateless verification on EVM chains. | **Formal Verification**<br>C11 native memory performance<br>O(log N) verification complexity | 📦 **[GitHub Repo](https://github.com/basantzp/aegis-zk-accumulator)** |
| **[local-evm-studio](https://github.com/basantzp/local-evm-studio)** | **Foundry Anvil Web Control Center**<br>Zero-dependency browser command center for local EVM instances: JSON-RPC console, sandbox state snapshots (`anvil_mine`, `evm_snapshot`), and 1-click MetaMask connector. | **Production Deployed**<br>Sub-millisecond RPC telemetry<br>Zero cloud dependency | 🌐 **[Live Application](https://local-evm-studio.vercel.app)**<br>📦 **[GitHub Repo](https://github.com/basantzp/local-evm-studio)** |
| **[degencheck-web3](https://github.com/basantzp/degencheck-web3)** | **High-Throughput Multi-Chain Security Engine**<br>Sub-second smart contract security scanner and DEX execution companion for Solana, Base, and EVM chains. Real-time honeypot, mint-trap, and LP lock verification. | **Production Deployed**<br>Real-time GoPlus & RugCheck integration<br>Anti-MEV Telegram bot routing | 🌐 **[Live Application](https://degencheck-web3.vercel.app)**<br>📦 **[GitHub Repo](https://github.com/basantzp/degencheck-web3)** |

---

## 🔬 Protocol Engineering Stack & Mental Models

```
                           ╔═════════════════════════════════════════════════╗
                           ║      DECENTRALIZED SYSTEMS ARCHITECTURE        ║
                           ╚═════════════════════════════════════════════════╝
                                                      │
         ┌───────────────────┬────────────────────────┴───────────────────────┬───────────────────┐
         ▼                   ▼                                                ▼                   ▼
┌─────────────────┐ ┌─────────────────────────┐              ┌────────────────────────┐ ┌─────────────────┐
│  DeFi & AMMs    │ │   Cancun EVM Low-Level  │              │  Account Abstraction   │ │ Bitcoin Core    │
├─────────────────┤ ├─────────────────────────┤              ├────────────────────────┤ ├─────────────────┤
│• Uniswap v4 Hook│ │• EIP-1153 tstore/tload  │              │• ERC-4337 Bundlers     │ │• Testnet4 Engine│
│• Anti-LVR Curves│ │• Yul Fixed-Point Math   │              │• ERC-7579 Modular AA   │ │• Script VM Eval │
│• Curve Invariant│ │• Custom Memory Allocator│              │• EIP-712 Paymasters    │ │• Taproot BIP-350│
│• Morpho Blue Mkts││• Namespaced Storage     │              │• Session Key Guards    │ │• SegWit BIP-173 │
└─────────────────┘ └─────────────────────────┘              └────────────────────────┘ └─────────────────┘
```

### 1. Advanced EVM & Cancun Optimization
- **Transient Storage (EIP-1153)**: Single-transaction reentrancy locks reducing overhead from 2,100 gas (`sstore`) to 100 gas (`tstore`), intra-tx fee accumulators, and zero-storage transient routers.
- **Yul Inline Assembly**: Custom memory bump allocators bypassing standard Solidity memory expansion penalties, high-performance function selector jump tables, and bitwise fixed-point WAD ($10^{18}$) / RAY ($10^{27}$) arithmetic.
- **Storage Engineering**: Multi-variable bit-packing into single 32-byte slots and ERC-7201 formulaic namespaced storage collision detectors.

### 2. High-Frequency DeFi & Liquidity Primitives
- **Anti-LVR Mechanics**: Continuous tick displacement tracking and exponential half-life volatility decay curves dynamically adjusting pool fee tiers to capture toxic flow as LP yields.
- **Concentrated & Multi-Asset AMMs**: Uniswap v3 $Q64.96$ tick ranges, Balancer generalized geometric invariant pools ($\prod B_i^{w_i} = k$), and Curve Newton-Raphson amplification pools.
- **Lending & Margin Markets**: Overcollateralized CDP stablecoin minters, isolated peer-to-peer agreements, Dutch auction liquidation engines, and multi-collateral margin baskets.

### 3. Account Abstraction & Applied Cryptography
- **ERC-4337 & ERC-7579**: Modular smart accounts, gas sponsorship verifying paymasters, scoped temporary session key plugins, and pre-execution spending guardian policy hooks.
- **Biometric & Off-Chain Verification**: WebAuthn / Passkey P-256 (secp256r1) signature verification, EIP-712 structured meta-transactions, and blind signature anonymous ballot schemes.
- **Zero-Knowledge & Accumulators**: Groth16 zk-SNARK pairing checks on the alt_bn128 curve (`0x08` precompile), and Sparse Merkle Tree (SMT) accumulator architectures.

### 4. Bitcoin Core & Script VM
- **Opcode Execution Engine**: Deterministic stack machine implementing `OP_DUP`, `OP_HASH160`, `OP_EQUALVERIFY`, `OP_CHECKSIG`, and `OP_CHECKMULTISIG`.
- **Address Encodings**: Native SegWit (Bech32, BIP-173) and Taproot (Bech32m, BIP-350) key derivation and signing.

---

## 🛠️ Tooling & Infrastructure

<p>
  <img src="https://img.shields.io/badge/Foundry-v1.8.4-E535AB?style=for-the-badge&logo=ethereum&logoColor=white" alt="Foundry" />
  <img src="https://img.shields.io/badge/Solidity-0.8.28-363636?style=for-the-badge&logo=solidity&logoColor=white" alt="Solidity" />
  <img src="https://img.shields.io/badge/Yul-Assembly-1B365D?style=for-the-badge&logo=c%2B%2B&logoColor=white" alt="Yul" />
  <img src="https://img.shields.io/badge/C++-17-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" alt="C++" />
  <img src="https://img.shields.io/badge/Rust-1.75+-DEA584?style=for-the-badge&logo=rust&logoColor=black" alt="Rust" />
  <img src="https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Hardhat-2.22-FFF100?style=for-the-badge&logo=javascript&logoColor=black" alt="Hardhat" />
  <img src="https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/Arch_Linux-Rolling-1793D1?style=for-the-badge&logo=archlinux&logoColor=white" alt="Arch Linux" />
</p>

---

## 📊 Verification & Protocol Rigor

All protocol repositories enforce:
- **Strict Invariant Property Testing**: State machine fuzzing via Foundry (`--runs 256` to `10,000+`).
- **Cancun EVM Compatibility**: Tested and verified against Ethereum Cancun hardfork opcodes (`evm_version = "cancun"`).
- **Formal Code Formatting**: Standardized via `forge fmt`.
- **Zero External Baggage**: Self-contained, custom-error driven contracts designed for gas minimization and audit readiness.

---

<div align="center">
  <sub>"In code we trust, on-chain we verify." • Basant Pokhrel — Open Source Protocol Engineering</sub>
</div>

---

## 🌐 Active Open-Source Protocol Contributions

| Ecosystem & Target | Scope & Architecture | Pull Request |
| :--- | :--- | :--- |
| **[Mastering Ethereum](https://github.com/ethereumbook/ethereumbook)** | **Core Protocol Literature & Standards**<br>Addressed maintainer review feedback from `@alessandromazza98` on Chapter 2 (*Ethereum Basics*) Further Reading. | 🚀 **[PR #1332](https://github.com/ethereumbook/ethereumbook/pull/1332)** |
| **[Awesome Solidity](https://github.com/bkrem/awesome-solidity)** | **Curated EVM Directory (7,000+ ⭐)**<br>Added `100-solidity-projects` to Resources > Examples > Educational with full invariant fuzzing coverage. | 🚀 **[PR #226](https://github.com/bkrem/awesome-solidity/pull/226)** |
| **[Awesome Uniswap Hooks](https://github.com/fewwwww/awesome-uniswap-hooks)** | **Uniswap v4 Dynamic Hook Ecosystem**<br>Contributed `v4-volatility-fee-hook` (Anti-LVR & toxic MEV mitigation) to Community Examples. | 🚀 **[PR #99](https://github.com/fewwwww/awesome-uniswap-hooks/pull/99)** |
| **[Awesome Account Abstraction](https://github.com/4337Mafia/awesome-account-abstraction)** | **ERC-4337 Standards Index (1,000+ ⭐)**<br>Contributed `aether-erc4337-paymaster` (Enterprise EntryPoint v0.7 Paymaster with Chainlink settlement) to Code > Paymasters. | 🚀 **[PR #1190](https://github.com/4337Mafia/awesome-account-abstraction/pull/1190)** |
| **[Awesome Foundry](https://github.com/crisgarner/awesome-foundry)** | **Foundry Framework Registry (1,100+ ⭐)**<br>Added `100-solidity-projects` (201/201 Foundry unit & invariant tests on Cancun EVM) to Projects Using Foundry. | 🚀 **[PR #58](https://github.com/crisgarner/awesome-foundry/pull/58)** |
