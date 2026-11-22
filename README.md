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
| **[degencheck-web3](https://github.com/basantzp/degencheck-web3)** | **High-Throughput Multi-Chain Security Engine**<br>Sub-second smart contract security scanner and DEX execution companion for Solana, Base, and Ethereum. Honeypot detection, liquidity locks, and simulated swaps. | **Live Production**<br>Real-time RPC parsing<br>Multi-chain transaction decoding | 🌐 **[Live Application](https://degencheck-web3.vercel.app)**<br>📦 **[GitHub Repo](https://github.com/basantzp/degencheck-web3)** |

---

## 🌐 Active Open-Source Protocol Contributions

| Ecosystem & Target | Scope & Architecture | Pull Request |
| :--- | :--- | :--- |
| **[Ethereum Improvement Proposals](https://github.com/ethereum/EIPs)** | **Ethereum Core Protocol Specification**<br>Aligned EIP-7732 (Enshrined Proposer-Builder Separation / ePBS) fork onboarding specification with merged `ethereum/consensus-specs#5736`, formally specifying validator-shared key builder registrations and top-ups. Resolves #12607. | 🚀 **[PR #12627](https://github.com/ethereum/EIPs/pull/12627)** |
| **[Aave v4](https://github.com/aave/aave-v4)** | **Premier Liquidity & Lending Protocol**<br>Authored core mathematical fix for `LiquidationLogic.calculateLiquidationBonus` boundary clamp (`healthFactor >= 1e18`), preventing arithmetic underflow panics (`0x11`) in `Spoke.getLiquidationBonus` for off-chain bots and risk simulators on healthy positions. Added boundary and health tests. Resolves #1380. | 🚀 **[PR #1402](https://github.com/aave/aave-v4/pull/1402)** |
| **[OpenZeppelin Contracts](https://github.com/OpenZeppelin/openzeppelin-contracts)** | **Industry Standard Smart Contract Security (24,000+ ⭐)**<br>Authored comprehensive Chain Compatibility Guide (`chain-compatibility.adoc`) covering EVM opcode baselines (Cancun EIP-1153/5656), precompiles (RIP-7212 P256 vs standard), L2 execution deviations (sub-second blocks, gas stipends, native ERC20 dual-tokens), and Foundry fork testing. Resolves #6853. | 🚀 **[PR #6856](https://github.com/OpenZeppelin/openzeppelin-contracts/pull/6856)** |
| **[Lexo Decentralized Escrow Protocol](https://github.com/Anjan-thedestroyer/Lexo)** | **On-Chain Legal Agreement & Arbitration Court**<br>Implemented comprehensive 19-test Foundry unit/fuzz suite for `ArbitratorRegistry.sol`, eliminated trapped protocol fees in `EscrowCore.resolveDispute`, resolved arbitration fee spoofing, and achieved 100% test pass rate (161/161 tests passing across 7 suites). | 🚀 **[PR #1](https://github.com/Anjan-thedestroyer/Lexo/pull/1)** |
| **[DMalpot Cadastral Blockchain](https://github.com/Anjan-thedestroyer/Build-Nepal-Hackathon-2026)** | **Municipal Land Deed & Cadastral Administration**<br>Engineered parcel subdivision (`subdivideLand` / *Kitta Kaat*), resolved critical `abi.encodePacked` multi-string hash collision vulnerability, and authored full 21-test Foundry unit and invariant test suite with 100% pass rate. | 🚀 **[PR #1](https://github.com/Anjan-thedestroyer/Build-Nepal-Hackathon-2026/pull/1)** |
| **[NepalFloodGuard Relief](https://github.com/pratikpokhrel2/nepalfloodguard)** | **Autonomous Disaster Relief & Emergency Recovery**<br>Hardened emergency multisig fund recovery, implemented batch relief distribution, and authored complete 9-test Foundry verification harness. | 🚀 **[PR #1](https://github.com/pratikpokhrel2/nepalfloodguard/pull/1)** |
| **[Rahat Aid Contracts](https://github.com/basantzp/rahat-contracts)** | **Disaster Response Cash & Voucher Assistance (CVA)**<br>Implemented batch offline relief voucher settlement (`sendBeneficiaryTokenToVendorBatch`), fixed cumulative vendor allowance budget exhaustion lock, and eliminated `Panic(0x11)` arithmetic underflows with 11/11 passing Foundry unit & fuzz tests. | 🚀 **[Fork / Branch](https://github.com/basantzp/rahat-contracts/tree/feat/cva-batch-offline-settlement-and-allowance-fix)** |
| **[Mastering Ethereum](https://github.com/ethereumbook/ethereumbook)** | **Core Protocol Literature & Standards**<br>Addressed maintainer review feedback from `@alessandromazza98` on Chapter 2 (*Ethereum Basics*) Further Reading. | 🚀 **[PR #1332](https://github.com/ethereumbook/ethereumbook/pull/1332)** |
| **[Awesome Solidity](https://github.com/bkrem/awesome-solidity)** | **Curated EVM Directory (7,000+ ⭐)**<br>Added `100-solidity-projects` to Resources > Examples > Educational with full invariant fuzzing coverage. | 🚀 **[PR #226](https://github.com/bkrem/awesome-solidity/pull/226)** |
| **[Awesome Uniswap Hooks](https://github.com/fewwwww/awesome-uniswap-hooks)** | **Uniswap v4 Dynamic Hook Ecosystem**<br>Contributed `v4-volatility-fee-hook` (Anti-LVR & toxic MEV mitigation) to Community Examples. | 🚀 **[PR #99](https://github.com/fewwwww/awesome-uniswap-hooks/pull/99)** |
| **[Awesome Account Abstraction](https://github.com/4337Mafia/awesome-account-abstraction)** | **ERC-4337 Standards Index (1,000+ ⭐)**<br>Contributed `aether-erc4337-paymaster` (Enterprise EntryPoint v0.7 Paymaster with Chainlink settlement) to Code > Paymasters. | 🚀 **[PR #1190](https://github.com/4337Mafia/awesome-account-abstraction/pull/1190)** |
| **[Awesome Foundry](https://github.com/crisgarner/awesome-foundry)** | **Foundry Framework Registry (1,100+ ⭐)**<br>Added `100-solidity-projects` (201/201 Foundry unit & invariant tests on Cancun EVM) to Projects Using Foundry. | 🚀 **[PR #58](https://github.com/crisgarner/awesome-foundry/pull/58)** |

---

## 🔬 Core Engineering Domains

### 1. Cancun EVM & Gas Optimization
- **Transient Storage (EIP-1153)**: Reentrancy protection locks using ephemeral `TSTORE` and `TLOAD`, bypassing persistent storage gas tariffs (saving 20,000+ gas per state transition).
- **Assembly & Yul**: Custom memory management, bitwise packing, and zero-copy byte manipulation.
- **Memory Optimization (EIP-5656)**: Direct memory-to-memory block transfers via `MCOPY`.

### 2. Automated Market Makers & DeFi Primitives
- **Uniswap v4 Hooks**: Custom hooks executed `beforeSwap`, `afterSwap`, `beforeInitialize`, and `afterInitialize`, dynamically adjusting pool fee tiers to capture toxic flow as LP yields.
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
