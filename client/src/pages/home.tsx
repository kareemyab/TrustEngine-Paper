import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("main section");
    const tocLinks = document.querySelectorAll("#toc a");

    const updateActiveToc = () => {
      let currentSection = "";
      const scrollPos = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    const handleScroll = () => {
      requestAnimationFrame(updateActiveToc);
    };

    window.addEventListener("scroll", handleScroll);
    updateActiveToc();

    // Smooth scroll for TOC links
    tocLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = (this as HTMLAnchorElement).getAttribute("href")?.substring(1);
        const targetSection = document.getElementById(targetId || "");
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-white text-black font-sans grid-bg min-h-screen">
      {/* ASCII Frog Watermark */}
      <div className="ascii-frog">
        {`.--._.---.___
       (    _       )
        '-'/     \\'-.
         /  o\\_/o  \\
        |     U     |
         \\  .---.  /
          '-.___.-'`}
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 py-8 relative">
        {/* Header Section */}
        <motion.header
          className="mb-16 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Trust Engine
          </h1>
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-dark">
            Zero-Knowledge Provenance Stamp on Digital Assets
          </h2>
          <div className="font-mono text-sm text-muted uppercase tracking-wider mb-2">
            VERSION 1.0 • DEPLOYED JANUARY 2025
          </div>
          <div className="font-mono text-sm text-muted">
            LAST UPDATED: DECEMBER 2024
          </div>
        </motion.header>

        {/* Main Layout: Sidebar + Content */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sticky Table of Contents */}
          <aside className="lg:w-80 lg:sticky lg:top-8 lg:h-fit">
            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted mb-4">
                Table of Contents
              </h3>
              <nav id="toc" className="space-y-2">
                {[
                  { href: "#problem-solution", text: "Problem & Solution" },
                  { href: "#roadmap", text: "5-Phase Roadmap" },
                  { href: "#introduction", text: "Introduction" },
                  { href: "#solution-technical", text: "Solution (Technical)" },
                  { href: "#tokenomics", text: "Tokenomics" },
                  { href: "#how-to-earn", text: "How to Earn" },
                  { href: "#participation", text: "Participation" },
                  { href: "#dao-governance", text: "DAO Governance" },
                  { href: "#community", text: "Join Community" },
                  { href: "#disclaimer", text: "Disclaimer" },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`block text-sm toc-link hover:text-accent transition-colors ${
                      activeSection === item.href.substring(1) ? "active-toc" : ""
                    }`}
                  >
                    {item.text}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 space-y-16">
            {/* Problem & Solution */}
            <section id="problem-solution" className="scroll-mt-8">
              <div className="font-mono text-xs uppercase tracking-wider text-muted mb-4">
                CORE CHALLENGE
              </div>
              <h2 className="font-serif text-4xl font-bold mb-8 flex items-center">
                <span className="mr-3">✦</span> Problem & Solution
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-4 text-red-600">
                    The Problem
                  </h3>
                  <p className="text-lg leading-relaxed">
                    No one can reliably prove who owns or created digital assets online, leading to
                    rampant theft, fraud, and loss of value.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-4 text-accent">
                    The Solution
                  </h3>
                  <p className="text-lg leading-relaxed">
                    Trust Engine creates a universal, tamper-proof proof-of-origin and ownership
                    layer for all digital assets—making trust, rights, and authenticity verifiable
                    for everyone.
                  </p>
                </div>
              </div>
            </section>

            {/* Roadmap */}
            <section id="roadmap" className="scroll-mt-8">
              <div className="font-mono text-xs uppercase tracking-wider text-muted mb-4">
                DEVELOPMENT PHASES
              </div>
              <h2 className="font-serif text-4xl font-bold mb-8 flex items-center">
                <span className="mr-3">✦</span> 5-Phase Roadmap
              </h2>

              <div className="space-y-8">
                {[
                  {
                    title: "Phase 1: Genesis Proofs",
                    description:
                      "Launch the world's first zero-knowledge provenance network, enabling anyone to cryptographically prove authorship of any digital asset.",
                    outcome: "100,000+ digital assets registered with immutable ownership proofs",
                    impact:
                      'Artists, developers, and creators can finally prove "I made this" with mathematical certainty',
                  },
                  {
                    title: "Phase 2: Verifier Network Activation",
                    description:
                      "Deploy the industry's first Proof of Verification consensus mechanism, creating a decentralized network of economic validators.",
                    outcome: "1,000+ active verifiers staking $10M+ TRUST tokens",
                    impact:
                      "Digital ownership becomes censorship-resistant and globally recognized",
                  },
                  {
                    title: "Phase 3: Rights Automation Revolution",
                    description:
                      "Transform digital commerce by making rights, royalties, and licensing fully automated through smart contracts.",
                    outcome: "$100M+ in automated creator royalties distributed",
                    impact:
                      "Artists get paid instantly, rights holders are protected automatically, IP theft becomes unprofitable",
                  },
                  {
                    title: "Phase 4: Internet-Scale Integration",
                    description:
                      "Become the default provenance standard powering major platforms, marketplaces, and AI systems worldwide.",
                    outcome:
                      "10+ major platforms (social media, AI labs, marketplaces) integrate Trust Engine verification",
                    impact: "Digital authenticity becomes as expected as HTTPS encryption",
                  },
                  {
                    title: "Phase 5: Autonomous Trust Protocol",
                    description:
                      "Achieve total decentralization—where the protocol, not any company or government, is the final arbiter of digital authenticity.",
                    outcome:
                      "100% DAO governance with Trust Engine Chain processing 1M+ proofs daily",
                    impact:
                      "Digital trust becomes mathematically guaranteed, forever protecting human creativity",
                  },
                ].map((phase, index) => (
                  <div key={index} className="border-l-4 border-accent pl-6">
                    <h3 className="font-serif text-xl font-semibold mb-2">{phase.title}</h3>
                    <p className="mb-4">{phase.description}</p>
                    <div className="text-sm text-muted">
                      <strong>Measurable outcome:</strong> {phase.outcome}
                      <br />
                      <strong>Real-world impact:</strong> {phase.impact}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Introduction */}
            <section id="introduction" className="scroll-mt-8">
              <div className="font-mono text-xs uppercase tracking-wider text-muted mb-4">
                PROTOCOL OVERVIEW
              </div>
              <h2 className="font-serif text-4xl font-bold mb-8 flex items-center">
                <span className="mr-3">✦</span> Introduction
              </h2>

              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Trust Engine introduces the blockchain industry's first{" "}
                  <strong>Proof of Verification (PoV)</strong> mechanism—a novel cryptographic
                  framework that solves the fundamental Verifier's Dilemma plaguing all
                  deterministic verification systems. While protocols like Bitcoin solved the
                  double-spending problem through Proof of Work, Trust Engine addresses an equally
                  critical challenge: ensuring verifiers actually perform verification work rather
                  than copying results.
                </p>

                <div className="bg-red-50 border-l-4 border-red-400 p-6">
                  <h3 className="font-serif text-xl font-semibold mb-3 text-red-800">
                    The Verifier's Dilemma Problem
                  </h3>
                  <p>
                    In zero-knowledge proof verification, all honest verifiers produce identical
                    outputs when processing the same cryptographic proof. This creates no economic
                    incentive for genuine computational work—verifiers can simply copy previous
                    results without performing actual verification, undermining network security.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-accent p-6">
                  <h3 className="font-serif text-xl font-semibold mb-3 text-green-800">
                    Trust Engine's PoV Solution
                  </h3>
                  <p>
                    Our Proof of Verification mechanism requires verifiers to submit cryptographic
                    evidence of intermediate computation steps, making result copying computationally
                    more expensive than honest verification. This breakthrough enables the first
                    truly scalable, trustless verification network for digital asset provenance.
                  </p>
                </div>

                <h3 className="font-serif text-2xl font-semibold mt-8 mb-4">
                  Digital Asset Definition
                </h3>
                <p className="leading-relaxed mb-4">
                  "A digital asset is generally anything created and stored digitally, is
                  identifiable and discoverable, and has or provides value." This includes articles,
                  images, videos, audio, CAD files, training datasets, repositories, AI-generated
                  images, game items, and medical scans.
                </p>

                <h3 className="font-serif text-2xl font-semibold mt-8 mb-4">Core Principles</h3>
                <ul className="list-disc list-inside space-y-2 text-muted">
                  <li>
                    <strong>Provenance Over Truth:</strong> We certify origin and integrity, not
                    editorial correctness
                  </li>
                  <li>
                    <strong>Economic Alignment:</strong> Token-weighted incentives ensure
                    stakeholders bear upside and downside
                  </li>
                  <li>
                    <strong>Open Transparency:</strong> Every decision, fund flow, and dispute is
                    recorded on-chain
                  </li>
                  <li>
                    <strong>Progressive Decentralization:</strong> Control shifts from founders to
                    community via quantitative milestones
                  </li>
                  <li>
                    <strong>Permissionless Participation:</strong> Anyone can join as Member,
                    Creator, Verifier, or Consumer
                  </li>
                </ul>
              </div>
            </section>

            {/* Solution Technical */}
            <section id="solution-technical" className="scroll-mt-8">
              <div className="font-mono text-xs uppercase tracking-wider text-muted mb-4">
                TECHNICAL IMPLEMENTATION
              </div>
              <h2 className="font-serif text-4xl font-bold mb-8 flex items-center">
                <span className="mr-3">✦</span> Solution (Technical Deep-Dive)
              </h2>

              <div className="space-y-8">
                <div className="code-block p-6 rounded font-mono text-sm">
                  <div className="text-accent mb-2">// Solution at a Glance</div>
                  <div>Stamp → Client hashes file locally and submits hash + metadata</div>
                  <div>
                    Verify → Verifiers reproduce zero-knowledge proof on Solana; ≥⅔ honest votes
                    finalize
                  </div>
                  <div>
                    Reveal → Anyone can inspect on-chain stamp: creator wallet, timestamp,
                    changelog
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-semibold mb-4">
                    Digital Asset Registration and Proof Submission
                  </h3>
                  <p className="mb-4">
                    Creator pays a proof registration fee to register their digital asset on the
                    protocol. The protocol generates a cryptographic hash and metadata tied to that
                    asset, uploading it to IPFS and referencing it by CID.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-semibold mb-4">
                    Independent Verifier Verification
                  </h3>
                  <p className="mb-4">
                    The cranker script receives unverified pending proof and assigns validators
                    using weighted sampling without replacement. Verifiers listen for events
                    indicating they've been selected to verify a proof, running the verification
                    function independently.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-semibold mb-4">Consensus Voting</h3>
                  <p className="mb-4">
                    Verifiers cast cryptographically signed votes signaling approval or rejection,
                    submitting on-chain. Votes are transparently aggregated using Byzantine Fault
                    Tolerance with a two-thirds consensus threshold (66.67%).
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-semibold mb-4">Achieving Consensus</h3>
                  <p className="mb-4">
                    If the initial 5-verifier committee is unanimous, the proof finalizes
                    immediately. Otherwise, the committee expands to 7 verifiers; the claim
                    finalizes only when ≥⅔ of this expanded set approve.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-semibold mb-4">
                    Immutability & Finalization
                  </h3>
                  <p className="mb-4">
                    Once consensus is met, the program stores the asset hash, metadata, and
                    finalized verification status immutably on-chain. Token-staked Verifiers earn
                    TRUST tokens through epoch-level staking emissions and immediate shares of proof
                    registration fees.
                  </p>
                </div>
              </div>
            </section>

            {/* Tokenomics */}
            <section id="tokenomics" className="scroll-mt-8">
              <div className="font-mono text-xs uppercase tracking-wider text-muted mb-4">
                TOKEN ECONOMICS
              </div>
              <h2 className="font-serif text-4xl font-bold mb-8 flex items-center">
                <span className="mr-3">✦</span> Tokenomics
              </h2>

              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 border">
                    <h3 className="font-serif text-lg font-semibold mb-4">Token Specifications</h3>
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong>Token:</strong> Trust Engine Token (TRUST)
                      </div>
                      <div>
                        <strong>Standard:</strong> SPL
                      </div>
                      <div>
                        <strong>Supply:</strong> 1,000,000,000 TRUST (fixed)
                      </div>
                      <div>
                        <strong>Circulating:</strong> 8.6% at TGE
                      </div>
                      <div>
                        <strong>Pre-sale Price:</strong> $0.10
                      </div>
                      <div>
                        <strong>Listing Price:</strong> $0.20
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 border">
                    <h3 className="font-serif text-lg font-semibold mb-4">Utility & Sinks</h3>
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong>Proof Registration:</strong> 60% burned, 40% to Treasury
                      </div>
                      <div>
                        <strong>Verifier Staking:</strong> 14-day unbonding period
                      </div>
                      <div>
                        <strong>Governance:</strong> Vote-escrow locks for power boosts
                      </div>
                      <div>
                        <strong>Slashing:</strong> 50% of stake burned for misbehavior
                      </div>
                      <div>
                        <strong>Challenge Bonds:</strong> Slashed if wrong
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-semibold mb-4">Token Allocation</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left">Allocation</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Percentage</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Tokens</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Vesting</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            allocation: "Community & Verifier Rewards",
                            percentage: "45%",
                            tokens: "450,000,000",
                            vesting: "Linear drip over 7 years",
                          },
                          {
                            allocation: "Treasury & Ecosystem",
                            percentage: "25%",
                            tokens: "250,000,000",
                            vesting: "No vest, DAO managed",
                          },
                          {
                            allocation: "Founders & Core Team",
                            percentage: "16%",
                            tokens: "160,000,000",
                            vesting: "4yr linear, 1yr cliff",
                          },
                          {
                            allocation: "Public Sale",
                            percentage: "6%",
                            tokens: "60,000,000",
                            vesting: "Circulating day 0",
                          },
                          {
                            allocation: "Private Sale",
                            percentage: "4%",
                            tokens: "40,000,000",
                            vesting: "Max 18mo cliff",
                          },
                          {
                            allocation: "Advisors",
                            percentage: "4%",
                            tokens: "40,000,000",
                            vesting: "3yr linear, 6mo cliff",
                          },
                        ].map((row, index) => (
                          <tr key={index}>
                            <td className="border border-gray-300 px-4 py-2">{row.allocation}</td>
                            <td className="border border-gray-300 px-4 py-2">{row.percentage}</td>
                            <td className="border border-gray-300 px-4 py-2">{row.tokens}</td>
                            <td className="border border-gray-300 px-4 py-2">{row.vesting}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            {/* How to Earn */}
            <section id="how-to-earn" className="scroll-mt-8">
              <div className="font-mono text-xs uppercase tracking-wider text-muted mb-4">
                REVENUE OPPORTUNITIES
              </div>
              <h2 className="font-serif text-4xl font-bold mb-8 flex items-center">
                <span className="mr-3">✦</span> How to Earn on Trust Engine
              </h2>

              <div className="space-y-8">
                <div className="bg-accent bg-opacity-10 border border-accent p-6 rounded">
                  <h3 className="font-serif text-xl font-semibold mb-4">
                    Revolutionary Economics: Monetizing Verification Work
                  </h3>
                  <p className="leading-relaxed">
                    Trust Engine's Proof of Verification (PoV) creates the first blockchain
                    protocol where verification work generates measurable, rewarded value. Unlike
                    traditional staking mechanisms that reward passive token holding, PoV directly
                    compensates computational effort.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-semibold mb-4">
                    Immediate Revenue Opportunities
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      <strong>Base Verification Rewards:</strong> Standard compensation for proof
                      processing
                    </li>
                    <li>
                      <strong>PoV Performance Bonuses:</strong> Additional rewards for computational
                      proof submission
                    </li>
                    <li>
                      <strong>Reputation Multipliers:</strong> High-quality verifiers earn up to
                      40% higher yields
                    </li>
                    <li>
                      <strong>Challenge Discovery Premiums:</strong> Extra compensation for
                      identifying fraudulent proofs
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-semibold mb-4">
                    TRUST Token: Multi-Stream Revenue Engine
                  </h3>
                  <div className="overflow-x-auto mt-4">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left">
                            Revenue Type
                          </th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Base APY</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">PoV Bonus</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Max APY</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Min Stake</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            type: "Standard Verification",
                            base: "12-18%",
                            bonus: "+25%",
                            max: "22.5%",
                            stake: "10,000 TRUST",
                          },
                          {
                            type: "High-Reputation Tier",
                            base: "18-25%",
                            bonus: "+40%",
                            max: "35%",
                            stake: "50,000 TRUST",
                          },
                          {
                            type: "Challenge Discovery",
                            base: "Bonus rewards",
                            bonus: "+100-500%",
                            max: "Variable",
                            stake: "Any stake",
                          },
                        ].map((row, index) => (
                          <tr key={index}>
                            <td className="border border-gray-300 px-4 py-2">{row.type}</td>
                            <td className="border border-gray-300 px-4 py-2">{row.base}</td>
                            <td className="border border-gray-300 px-4 py-2">{row.bonus}</td>
                            <td className="border border-gray-300 px-4 py-2">{row.max}</td>
                            <td className="border border-gray-300 px-4 py-2">{row.stake}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-semibold mb-4">
                    Yield Optimization Strategies
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      <strong>Stake Size Scaling:</strong> Larger stakes access higher-tier
                      verification assignments
                    </li>
                    <li>
                      <strong>Performance Consistency:</strong> 95%+ uptime unlocks maximum PoV
                      bonuses
                    </li>
                    <li>
                      <strong>Early Adopter Advantages:</strong> First 500 verifiers receive 50%
                      bonus multiplier for 6 months
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 border-l-4 border-accent p-6">
                  <h3 className="font-serif text-xl font-semibold mb-3">Investment Thesis</h3>
                  <p>
                    Unlike passive staking protocols, Trust Engine's PoV mechanism creates genuine
                    work-based rewards that scale with network adoption, digital asset growth, and
                    increasing demand for provenance verification.
                  </p>
                </div>
              </div>
            </section>

            {/* Participation */}
            <section id="participation" className="scroll-mt-8">
              <div className="font-mono text-xs uppercase tracking-wider text-muted mb-4">
                ECOSYSTEM ROLES
              </div>
              <h2 className="font-serif text-4xl font-bold mb-8 flex items-center">
                <span className="mr-3">✦</span> Participation in Trust Engine's Ecosystem
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-6">
                    Creators (Digital Asset Owners)
                  </h3>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-4">
                    <p>
                      <strong>Definition:</strong> Entities that establish a provenance trail for
                      their digital asset by registering it on the protocol.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Rights & Powers</h4>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        <li>Submit proofs to IPFS and on-chain storage</li>
                        <li>Earn "proof bounty" in TRUST tokens upon verification</li>
                        <li>Build reputation score through verified submissions</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Responsibilities</h4>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        <li>Pay proof-registration fee</li>
                        <li>Provide accurate asset metadata</li>
                        <li>Maintain honesty to avoid reputation penalties</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-6">
                    Verifiers (Digital Asset Verifiers)
                  </h3>
                  <div className="bg-green-50 border-l-4 border-accent p-6 mb-4">
                    <p>
                      <strong>Definition:</strong> Entities operating nodes that execute
                      zero-knowledge proof verification. Must stake TRUST tokens as collateral to be
                      eligible for verification assignments and annual reward rates.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Rights & Powers</h4>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        <li>Validate or reject incoming proofs</li>
                        <li>Earn base proof rewards plus performance bonuses</li>
                        <li>Participate in consensus voting mechanisms</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Responsibilities</h4>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        <li>Maintain ≥95% node availability per 48-hour epoch</li>
                        <li>Submit cryptographic proof of verification work</li>
                        <li>Subject to slashing for misbehavior or inaccuracy</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-4">
                    Reputation & Penalty Systems
                  </h3>
                  <p className="mb-4">
                    Both Creators and Verifiers maintain dynamic, on-chain reputation scores that
                    directly impact their rewards, selection probability, and network participation
                    privileges.
                  </p>

                  <div className="code-block p-4 rounded font-mono text-sm mb-4">
                    <div className="text-accent mb-2">// Creator Reputation Formula</div>
                    <div>
                      reputation = (verified_assets / total_assets) * confidence_weight +
                      global_avg
                    </div>
                    <div className="text-accent mt-2">// Verifier Reputation Formula</div>
                    <div>
                      reputation = (correct_verifications / total_verifications) * uptime_factor
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Creator Penalties</h4>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        <li>
                          <strong>Minor:</strong> Warning + slight reputation reduction
                        </li>
                        <li>
                          <strong>Moderate:</strong> 1-3 month submission suspension
                        </li>
                        <li>
                          <strong>Severe:</strong> Permanent revocation + on-chain blacklisting
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Verifier Penalties</h4>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        <li>
                          <strong>L1 Minor:</strong> 2-5% stake slash + reputation hit
                        </li>
                        <li>
                          <strong>L2 Moderate:</strong> 10-20% slash + 1-epoch cooldown
                        </li>
                        <li>
                          <strong>L3-L4 Severe:</strong> 40-100% slash + suspension/removal
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* DAO Governance */}
            <section id="dao-governance" className="scroll-mt-8">
              <div className="font-mono text-xs uppercase tracking-wider text-muted mb-4">
                DECENTRALIZED GOVERNANCE
              </div>
              <h2 className="font-serif text-4xl font-bold mb-8 flex items-center">
                <span className="mr-3">✦</span> DAO Governance
              </h2>

              <div className="space-y-8">
                <div className="bg-purple-50 border-l-4 border-purple-400 p-6">
                  <h3 className="font-serif text-xl font-semibold mb-3">Member Definition</h3>
                  <p>
                    A governance stakeholder recorded in the on-chain registry who can table
                    proposals, vote, and receive governance rewards. Any address that signs the
                    Code-of-Conduct and self-delegates ≥1 TRUST becomes a Member.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-4">DAO Layers</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left">Layer</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Composition</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Powers</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Checks</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            layer: "Token-holders",
                            composition: "≥1 TRUST & self-delegated",
                            powers: "Propose, Vote, Appoint Stewards",
                            checks: "On-chain Governor + quorum rules",
                          },
                          {
                            layer: "Steward Council",
                            composition: "5-7 seats, 6mo elections",
                            powers: "Execute budget, Pay invoices",
                            checks: "50K TRUST bond, No-confidence",
                          },
                          {
                            layer: "Guardian Multisig",
                            composition: "3-of-5 founders (Phase 0-1)",
                            powers: "Emergency pause (≤7 days)",
                            checks: "Sunsets at Phase 2 KPIs",
                          },
                        ].map((row, index) => (
                          <tr key={index}>
                            <td className="border border-gray-300 px-4 py-2">{row.layer}</td>
                            <td className="border border-gray-300 px-4 py-2">{row.composition}</td>
                            <td className="border border-gray-300 px-4 py-2">{row.powers}</td>
                            <td className="border border-gray-300 px-4 py-2">{row.checks}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-4">Steward Council Roles</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <ul className="space-y-3 text-sm">
                        <li>
                          <strong>Lead Steward:</strong> Agenda-setting, backlog triage, proposal
                          implementation
                        </li>
                        <li>
                          <strong>Finance Steward:</strong> Treasury management, P&L reporting,
                          grant reconciliation
                        </li>
                        <li>
                          <strong>Technical Steward:</strong> Core programs, infrastructure,
                          upgrades & audits
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-3 text-sm">
                        <li>
                          <strong>Community & Growth:</strong> Social channels, partnerships, user
                          acquisition
                        </li>
                        <li>
                          <strong>Governance & Risk:</strong> Policy drafting, legal monitoring,
                          Code-of-Conduct
                        </li>
                        <li>
                          <strong>Floating Stewards:</strong> Optional extra seats for specialized
                          needs
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-4">
                    Proposal & Voting Process
                  </h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-accent pl-4">
                      <h4 className="font-semibold">Submission Requirements</h4>
                      <p className="text-sm">
                        Members holding ≥1% of circulating TRUST may file standard proposals with a
                        50,000 TRUST bond (50% returned if passed, 50% burned if failed).
                      </p>
                    </div>

                    <div className="border-l-4 border-accent pl-4">
                      <h4 className="font-semibold">Voting Thresholds</h4>
                      <ul className="text-sm list-disc list-inside">
                        <li>
                          <strong>Parameter Changes:</strong> 0.5% quorum, simple majority
                        </li>
                        <li>
                          <strong>Treasury (≤250K):</strong> 1.5% quorum, supermajority
                        </li>
                        <li>
                          <strong>Treasury ({'>'}250K):</strong> 2% quorum, supermajority
                        </li>
                        <li>
                          <strong>Constitutional:</strong> 3% quorum, supermajority
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-4">Registration & Security</h3>
                  <div className="code-block p-4 rounded font-mono text-sm">
                    <div className="text-accent mb-2">// Member Registration Flow</div>
                    <div>1. Connect wallet → verify ≥1 TRUST balance</div>
                    <div>2. Sign Code-of-Conduct → recorded on-chain</div>
                    <div>3. MemberBadge NFT issued → 24h activation delay</div>
                    <div>4. Full voting rights activated</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Community */}
            <section id="community" className="scroll-mt-8">
              <div className="font-mono text-xs uppercase tracking-wider text-muted mb-4">
                CONNECT & ENGAGE
              </div>
              <h2 className="font-serif text-4xl font-bold mb-8 flex items-center">
                <span className="mr-3">✦</span> Join Community
              </h2>

              <div className="space-y-8">
                <p className="text-lg leading-relaxed">
                  Connect with the Trust Engine community across multiple platforms to stay updated
                  on protocol development, participate in governance discussions, and engage with
                  fellow creators and verifiers.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      name: "Mirror.xyz",
                      description:
                        "Read our latest research, updates, and technical deep-dives on decentralized publishing.",
                      href: "#",
                    },
                    {
                      name: "Snapshot",
                      description:
                        "Participate in off-chain governance voting and signal your support for proposals.",
                      href: "#",
                    },
                    {
                      name: "Discord",
                      description:
                        "Join real-time discussions with developers, verifiers, and the core team.",
                      href: "#",
                    },
                    {
                      name: "Telegram",
                      description:
                        "Get quick updates and participate in community chat with global members.",
                      href: "#",
                    },
                    {
                      name: "X (Twitter)",
                      description:
                        "Follow our announcements, share insights, and engage in protocol discussions.",
                      href: "#",
                    },
                    {
                      name: "Farcaster",
                      description:
                        "Connect on the decentralized social network and join crypto-native conversations.",
                      href: "#",
                    },
                  ].map((platform) => (
                    <a
                      key={platform.name}
                      href={platform.href}
                      className="block bg-gray-50 border border-gray-200 p-6 hover:border-accent hover:bg-accent hover:bg-opacity-5 transition-all"
                    >
                      <h3 className="font-semibold text-accent mb-2">{platform.name}</h3>
                      <p className="text-sm text-muted">{platform.description}</p>
                    </a>
                  ))}
                </div>

                <div className="bg-accent bg-opacity-10 border border-accent p-6 rounded">
                  <h3 className="font-serif text-xl font-semibold mb-3">Get Involved</h3>
                  <p className="mb-4">
                    Ready to contribute to the future of digital authenticity? Here's how you can
                    get started:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Register as a Creator and start proving ownership of your digital assets</li>
                    <li>
                      Become a Verifier and earn rewards for maintaining network security
                    </li>
                    <li>Join the DAO and help govern the protocol's future development</li>
                    <li>
                      Contribute to Working Groups focused on core development, business
                      development, or community growth
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Disclaimer */}
            <section id="disclaimer" className="scroll-mt-8">
              <div className="font-mono text-xs uppercase tracking-wider text-muted mb-4">
                LEGAL NOTICE
              </div>
              <h2 className="font-serif text-4xl font-bold mb-8 flex items-center">
                <span className="mr-3">✦</span> Disclaimer
              </h2>

              <div className="space-y-6 text-sm">
                <div className="bg-red-50 border-l-4 border-red-400 p-6">
                  <h3 className="font-semibold mb-2 text-red-800">IMPORTANT LEGAL DISCLAIMER</h3>
                  <p className="text-red-700">
                    PLEASE READ THIS DISCLAIMER CAREFULLY BEFORE ACCESSING ANY TRUST ENGINE
                    MATERIALS OR CONSIDERING PARTICIPATION IN THE TRUST ENGINE PROTOCOL.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">NO SECURITIES OFFERING OR INVESTMENT ADVICE</h3>
                  <p className="mb-2">
                    <strong>IMPORTANT:</strong> The TRUST tokens have not been registered under the
                    U.S. Securities Act of 1933, the U.S. Securities Exchange Act of 1934, or the
                    securities laws of any state or jurisdiction.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted">
                    <li>
                      The Materials do not constitute an offer to sell or solicitation to buy
                      securities in any jurisdiction
                    </li>
                    <li>
                      TRUST tokens may be deemed securities by regulatory authorities under the
                      Howey test
                    </li>
                    <li>
                      No evaluation has been conducted by the SEC, CFTC, or any other regulatory
                      body
                    </li>
                    <li>
                      The Materials are for informational purposes only and do not constitute
                      investment advice
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">UNAUDITED PROTOCOL STATUS</h3>
                  <p className="mb-2">
                    <strong>
                      THE TRUST ENGINE PROTOCOL AND TOKENOMICS HAVE NOT BEEN AUDITED BY INDEPENDENT
                      THIRD PARTIES.
                    </strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted">
                    <li>Smart contracts, consensus mechanisms, and economic models are unaudited</li>
                    <li>
                      Security vulnerabilities, economic exploits, or technical failures may exist
                    </li>
                    <li>
                      No warranties are provided regarding security, functionality, or economic
                      viability
                    </li>
                    <li>
                      Future security audits are planned but not guaranteed to identify all issues
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">TECHNICAL AND OPERATIONAL RISKS</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Blockchain Technology Risks:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted text-xs">
                        <li>Smart contract vulnerabilities and potential exploits</li>
                        <li>Consensus mechanism failures or 51% attacks</li>
                        <li>Network congestion and transaction failures</li>
                        <li>Key management and wallet security risks</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Protocol-Specific Risks:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted text-xs">
                        <li>Zero-knowledge proof verification failures</li>
                        <li>Verifier selection algorithm manipulation</li>
                        <li>Governance token concentration</li>
                        <li>Slashing mechanisms and staking penalties</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">ECONOMIC AND FINANCIAL RISKS</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted">
                    <li>TRUST tokens may lose all or substantial value</li>
                    <li>No guarantee of liquidity or market development</li>
                    <li>High volatility and speculative nature</li>
                    <li>Loss of staked tokens through slashing mechanisms</li>
                    <li>14-day unbonding period creates liquidity risk</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">NO WARRANTIES OR GUARANTEES</h3>
                  <p className="mb-2">
                    <strong>
                      THE COMPANY PROVIDES THE MATERIALS AND PROTOCOL "AS IS" WITHOUT WARRANTIES OF
                      ANY KIND.
                    </strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted">
                    <li>No warranty of merchantability, fitness for purpose, or non-infringement</li>
                    <li>No guarantee of protocol functionality, uptime, or performance</li>
                    <li>No assurance of economic returns or utility value</li>
                    <li>Development roadmap and milestones are subject to change</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">LIMITATION OF LIABILITY</h3>
                  <p className="mb-2">
                    <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted">
                    <li>
                      The Company shall not be liable for any direct, indirect, incidental, or
                      consequential damages
                    </li>
                    <li>Liability is limited to the amount paid for TRUST tokens, if any</li>
                    <li>No liability for lost profits, data loss, or business interruption</li>
                    <li>
                      Exclusions apply even if the Company has been advised of potential damages
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">COMPLIANCE OBLIGATIONS</h3>
                  <p className="mb-2">
                    <strong>USER RESPONSIBILITIES:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted">
                    <li>Compliance with applicable laws in your jurisdiction</li>
                    <li>Proper tax reporting and payment obligations</li>
                    <li>
                      KYC/AML compliance for verifier operations above specified thresholds
                    </li>
                    <li>Understanding of local restrictions on digital asset activities</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">DISPUTE RESOLUTION</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted">
                    <li>Disputes shall be resolved through binding arbitration in Delaware</li>
                    <li>Class action waiver applies to the maximum extent permitted by law</li>
                    <li>Governing law: Delaware state law and applicable U.S. federal law</li>
                    <li>Venue: Delaware state or federal courts for arbitration enforcement</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                  <h3 className="font-semibold mb-2 text-yellow-800">ACKNOWLEDGMENT</h3>
                  <p className="text-yellow-700 mb-2">
                    By proceeding to access Trust Engine Materials, you acknowledge that:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-yellow-700 text-xs">
                    <li>You have read and understood this entire disclaimer</li>
                    <li>
                      You accept all risks associated with blockchain technologies and digital assets
                    </li>
                    <li>You are not relying solely on Company statements for investment decisions</li>
                    <li>You will seek independent professional advice as appropriate</li>
                    <li>You understand that TRUST tokens are experimental and may fail</li>
                  </ul>
                  <p className="text-yellow-800 mt-4 font-semibold">
                    IF YOU DO NOT AGREE TO THESE TERMS, DO NOT ACCESS OR USE TRUST ENGINE MATERIALS
                    OR PARTICIPATE IN THE PROTOCOL.
                  </p>
                </div>

                <div className="text-xs text-muted">
                  <p>
                    This disclaimer does not constitute legal advice and may not address all
                    applicable legal requirements. Consult qualified legal counsel for specific
                    situations.
                  </p>
                  <p className="mt-2">
                    Document Version: 1.0 • Effective Date: January 2025 • Last Updated: December
                    2024
                  </p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white mt-20 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-mono text-sm">
            © 2025 TE DevLab, Inc. All rights reserved. Registered in Delaware.
          </p>
        </div>
      </footer>
    </div>
  );
}
