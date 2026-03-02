
import React from 'react';
import { Navigation } from './components/Navigation';
import { Section } from './components/Section';
import { Heading, SubHeading, Paragraph, Card, StatCard, Badge, GlowCard } from './components/UI';
import { motion } from 'framer-motion';
import { 
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';
import { 
  AlertCircle, 
  Sun, 
  Battery, 
  Thermometer, 
  Home, 
  Zap,
  CheckCircle2,
  Phone,
  Calculator,
  ArrowUpRight,
  Handshake,
  Users,
  Globe,
  Award,
  Sparkles,
  Map as MapIcon,
  MapPin,
  TrendingUp,
  ArrowRightLeft,
  Leaf,
  Navigation as NavIcon,
  Briefcase,
  UserCheck,
  Layout
} from 'lucide-react';

const renewableMarketData = [
  { name: 'Solar Panels Glasgow', value: 7200, color: '#0EA5E9' },
  { name: 'Heat Pumps Central Belt', value: 4800, color: '#0284C7' },
  { name: 'Solar PV Paisley', value: 3900, color: '#7DD3FC' },
  { name: 'Scotland ASHP Installers', value: 5100, color: '#10B981' },
  { name: 'Solar Panels East Kilbride', value: 3200, color: '#0EA5E9' },
];

const AuditIssue: React.FC<{ url: string; issue: string; severity: 'critical' | 'warning' }> = ({ url, issue, severity }) => (
  <div className="flex items-center justify-between p-4 rounded-xl bg-slate-900/60 border border-slate-800 mb-3 group hover:border-brand/40 transition-colors">
    <div className="flex items-center gap-4">
      <div className={`p-2 rounded-lg ${severity === 'critical' ? 'bg-red-500/10 text-red-400' : 'bg-amber-500/10 text-amber-400'}`}>
        <AlertCircle size={18} />
      </div>
      <div>
        <div className="text-xs font-mono text-slate-500">{url}</div>
        <div className="text-sm font-bold text-white">{issue}</div>
      </div>
    </div>
    <div className={`text-[10px] font-black uppercase px-2 py-1 rounded border ${severity === 'critical' ? 'border-red-500/30 text-red-500' : 'border-amber-500/30 text-amber-500'}`}>
      {severity}
    </div>
  </div>
);

function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-brand selection:text-slate-900 md:pl-20 lg:pl-64 overflow-x-hidden">
      <Navigation />
      
      {/* HERO SECTION */}
      <section id="hero" className="min-h-screen w-full flex flex-col justify-center px-4 md:px-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/20 blur-[120px] rounded-full"></div>
           <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 blur-[100px] rounded-full"></div>
           <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="text-slate-900">
              <path d="M0 0 L100 0 L100 100 L0 100 Z" fill="none" stroke="currentColor" strokeWidth="0.1" strokeDasharray="1 1" />
           </svg>
        </div>
        
        <div className="max-w-5xl z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-brand font-bold text-xs tracking-[0.3em] uppercase border border-brand/20 px-4 py-2 rounded-full bg-brand/5 backdrop-blur-sm">
                Glasgow & Central Belt Renewables Specialists
              </span>
              <div className="h-px w-20 bg-gradient-to-r from-brand/50 to-transparent"></div>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] mb-10 tracking-tight">
              ENERGY FOR <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-accent to-emerald-200 animate-gradient-x uppercase">THE LOWLANDS</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mb-12 leading-relaxed border-l-2 border-brand/50 pl-6">
              Homeowners across <span className="text-white font-bold">Glasgow, Paisley, and the Central Belt</span> are ready for energy independence. 
              Town and Country Renewables is currently invisible for 75% of regional search volume. We are here to dominate the Scottish market.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-slate-900/80 border border-slate-800 px-6 py-4 rounded-2xl backdrop-blur-md">
                <Sun className="text-brand" size={24} />
                <div>
                  <div className="text-white font-bold leading-none">Domestic Solar PV</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Central Belt Market Focus</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-slate-900/80 border border-slate-800 px-6 py-4 rounded-2xl backdrop-blur-md">
                <Thermometer className="text-brand" size={24} />
                <div>
                  <div className="text-white font-bold leading-none">Air Source Heat Pumps</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">High-Intent Lead Pillar</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
        >
          <span className="text-[10px] uppercase tracking-[0.5em]">Scroll to Strategy</span>
          <div className="w-px h-12 bg-gradient-to-b from-brand to-transparent"></div>
        </motion.div>
      </section>

      {/* MARKET AUDIT */}
      <Section id="summary">
        <Badge>Digital Visibility Audit</Badge>
        <Heading>Clearing the Search Gaps</Heading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <GlowCard className="h-full border-red-500/20">
             <div className="absolute top-0 right-0 p-8 opacity-20">
               <AlertCircle size={120} className="text-red-500" />
             </div>
             <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-3 relative z-10 uppercase tracking-tighter">
               <span className="p-2 bg-red-500/10 rounded-lg"><AlertCircle size={24} /></span> 
               Lost Traffic
             </h3>
             <div className="space-y-4 relative z-10">
                <AuditIssue url="/solar-glasgow/" issue="Ranking Page 5 (Dead Zone)" severity="critical" />
                <AuditIssue url="/central-belt-ashp/" issue="Zero Local Signal Strength" severity="critical" />
                <AuditIssue url="/paisley-renewables/" issue="No Geo-Optimized Landing Page" severity="critical" />
                <AuditIssue url="/scotland-solar-grants/" issue="Missing Content on Home Energy Scotland" severity="warning" />
             </div>
          </GlowCard>

          <GlowCard className="h-full">
             <div className="absolute top-0 right-0 p-8 opacity-20">
               <Zap size={120} className="text-brand" />
             </div>
             <h3 className="text-2xl font-bold text-brand mb-6 flex items-center gap-3 relative z-10 uppercase tracking-tighter">
               <span className="p-2 bg-brand/10 rounded-lg"><Zap size={24} /></span>
               The Scotland Edge
             </h3>
             <p className="text-slate-300 text-lg leading-relaxed relative z-10">
               Search volume for <strong>"Solar Panels Glasgow"</strong> and <strong>"Air Source Heat Pumps Scotland"</strong> has surged by 64% this year. 
               <br/><br/>
               By building a hyper-local SEO engine focused on 40-50 miles of Glasgow, we capture high-intent homeowners in East Kilbride, Hamilton, and the Central Belt.
             </p>
             <div className="mt-6 flex gap-2">
                <span className="px-3 py-1 bg-slate-800 rounded text-[10px] font-bold text-slate-400">GLASGOW PV</span>
                <span className="px-3 py-1 bg-slate-800 rounded text-[10px] font-bold text-slate-400">CENTRAL ASHP</span>
                <span className="px-3 py-1 bg-slate-800 rounded text-[10px] font-bold text-slate-400">SCOTLAND SOLAR</span>
             </div>
          </GlowCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard label="Monthly Lead Ceiling" value="200+" subtext="Untapped Market Volume" />
          <StatCard label="Regional Rank Avg" value="Page 4" subtext="Invisibile to Homeowners" delay={0.2} />
          <StatCard label="Brand Authority" value="Low" subtext="Lacking Central Belt Dominance" delay={0.4} />
        </div>
      </Section>

      {/* MARKET ANALYSIS */}
      <Section id="analysis">
        <Badge>Market Intelligence</Badge>
        <Heading>Regional Search Power</Heading>
        <Paragraph>
          The market for residential renewables in the Central Belt is high-volume but geographically fragmented. We will own the 50-mile radius around Glasgow.
        </Paragraph>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <Card title="Glasgow & Paisley" icon={<Sun className="text-brand"/>}>
            Targeting "Solar Glasgow" and "Heat Pumps Paisley". Capturing the high-density residential demand in your primary hub.
          </Card>
          <Card title="East Kilbride & Hamilton" icon={<Thermometer className="text-brand"/>}>
            Capitalizing on high-ticket domestic installs in the affluent suburbs of South Lanarkshire. Homeowners seeking ASHP solutions.
          </Card>
          <Card title="Stirling & Falkirk" icon={<Zap className="text-brand"/>}>
            Expanding North-East to cover Stirling and the M876 corridor. Focusing on "Central Belt Solar" and Scotland-wide domestic PV.
          </Card>
        </div>

        <div className="mt-20 h-[400px] w-full bg-slate-900/40 p-8 rounded-3xl border border-slate-800">
          <SubHeading>Monthly Local Search Intent (Glasgow Focus)</SubHeading>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={renewableMarketData} layout="vertical" margin={{ left: 40, right: 40 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={true} vertical={false} />
              <XAxis type="number" hide />
              <YAxis dataKey="name" type="category" stroke="#64748b" fontSize={11} width={150} />
              <Tooltip 
                cursor={{fill: 'rgba(16, 185, 129, 0.1)'}}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-slate-950 border border-slate-700 p-3 rounded-xl shadow-xl">
                        <p className="text-xs text-brand font-bold uppercase">{payload[0].payload.name}</p>
                        <p className="text-xl font-black text-white">{payload[0].value.toLocaleString()} <span className="text-xs text-slate-500 font-normal">Searches/mo</span></p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                {renewableMarketData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Section>

      {/* STRATEGY */}
      <Section id="strategy">
        <Badge>The Domination Roadmap</Badge>
        <Heading>Central Belt Growth Blueprint</Heading>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-20">
           {[
             { 
               title: "Localized Town Hubs", 
               icon: <MapPin />, 
               desc: "Specific landing pages for Glasgow, Paisley, East Kilbride, and Hamilton to dominate local maps." 
             },
             { 
               title: "Domestic Authority", 
               icon: <Award />, 
               desc: "Building citations and backlinks from Scottish property and eco-blogs to signal local trust." 
             },
             { 
               title: "High-Intent Lead Funnels", 
               icon: <Sparkles />, 
               desc: "Conversion rate optimization focused strictly on domestic PV and ASHP quotes for homeowners." 
             }
           ].map((item, idx) => (
             <motion.div 
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900/60 p-8 rounded-3xl border border-slate-800 hover:border-brand/50 transition-all duration-300 group relative overflow-hidden"
             >
               <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-brand mb-6 group-hover:scale-110 transition-transform shadow-xl">
                 {item.icon}
               </div>
               <h4 className="text-white font-bold mb-4 text-xl">{item.title}</h4>
               <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
             </motion.div>
           ))}
        </div>

        <div className="bg-slate-900/40 p-10 rounded-3xl border border-slate-800 mb-16">
          <SubHeading>Local Search Pillars (50-Mile Radius)</SubHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {[
              "Solar Panels Glasgow",
              "Heat Pumps Central Belt",
              "Solar PV Paisley",
              "Domestic Solar East Kilbride",
              "ASHP Installers Stirling",
              "Scotland Solar Grants",
              "Hamilton Heat Pumps",
              "Motherwell Solar Cost"
            ].map((kw, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-slate-950 border border-slate-800 group hover:border-brand/40 transition-all">
                <div className="w-2 h-2 rounded-full bg-brand group-hover:animate-ping"></div>
                <span className="text-sm font-medium text-slate-300">{kw}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* REGIONAL FOCUS */}
      <Section id="regional">
        <Badge>Target Territories</Badge>
        <Heading>The Central Belt & Lowlands</Heading>
        <Paragraph>
          Our strategy avoids commercial distraction and focuses purely on high-net-worth domestic installs within 50 miles of Glasgow.
        </Paragraph>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {/* Glasgow Core */}
          <div className="relative p-8 rounded-3xl bg-slate-900/40 border border-slate-800 overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 -rotate-12 group-hover:rotate-0 transition-transform duration-700 pointer-events-none">
              <NavIcon size={120} className="text-brand" />
            </div>
            <div className="relative z-10">
              <h4 className="text-xl font-black text-white uppercase tracking-tighter mb-4">Glasgow Core</h4>
              <ul className="space-y-3 mb-6 text-sm text-slate-400">
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-brand shrink-0 mt-1"/> Own your immediate geography.</li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-brand shrink-0 mt-1"/> Rank #1 for Local Maps.</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                {["Glasgow", "Paisley", "Clydebank"].map(tag => (
                  <span key={tag} className="px-2 py-0.5 bg-slate-800 rounded text-[9px] text-slate-500 uppercase font-bold">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* South: Lanarkshire */}
          <div className="relative p-8 rounded-3xl bg-slate-900/40 border border-slate-800 overflow-hidden group">
             <div className="absolute top-0 right-0 p-8 opacity-5 -rotate-12 group-hover:rotate-0 transition-transform duration-700 pointer-events-none">
              <Globe size={120} className="text-brand" />
            </div>
            <div className="relative z-10">
              <h4 className="text-xl font-black text-white uppercase tracking-tighter mb-4">The South Axis</h4>
              <ul className="space-y-3 mb-6 text-sm text-slate-400">
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-brand shrink-0 mt-1"/> High-volume Lanarkshire demand.</li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-brand shrink-0 mt-1"/> East Kilbride premium retrofits.</li>
              </ul>
               <div className="flex flex-wrap gap-2">
                {["East Kilbride", "Hamilton", "Motherwell"].map(tag => (
                  <span key={tag} className="px-2 py-0.5 bg-slate-800 rounded text-[9px] text-slate-500 uppercase font-bold">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* North/East: Stirling */}
          <div className="relative p-8 rounded-3xl bg-slate-900/40 border border-slate-800 overflow-hidden group">
             <div className="absolute top-0 right-0 p-8 opacity-5 -rotate-12 group-hover:rotate-0 transition-transform duration-700 pointer-events-none">
              <Home size={120} className="text-brand" />
            </div>
            <div className="relative z-10">
              <h4 className="text-xl font-black text-white uppercase tracking-tighter mb-4">The North Axis</h4>
              <ul className="space-y-3 mb-6 text-sm text-slate-400">
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-brand shrink-0 mt-1"/> Stirling urban PV market.</li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-brand shrink-0 mt-1"/> Falkirk affluent homeowner focus.</li>
              </ul>
               <div className="flex flex-wrap gap-2">
                {["Stirling", "Falkirk", "Cumbernauld"].map(tag => (
                  <span key={tag} className="px-2 py-0.5 bg-slate-800 rounded text-[9px] text-slate-500 uppercase font-bold">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* VALUE LOGIC */}
      <Section id="value">
        <Badge>The Growth Math</Badge>
        <Heading>SEO vs National Portals</Heading>
        <Paragraph>
          National lead portals charge premium prices for shared leads. Our comprehensive strategy builds a private lead generation machine for Town and Country Renewables.
        </Paragraph>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <GlowCard className="border-red-500/20">
            <h4 className="text-2xl font-black text-red-400 mb-6 flex items-center gap-2 uppercase tracking-tighter">
              <ArrowRightLeft className="text-red-500" size={24} />
              The "Rented" Model
            </h4>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-white font-bold">Portal Leads</span>
                  <span className="text-red-400 text-sm font-black">£80 - £150 / ea</span>
                </div>
                <div className="text-xs text-slate-500">Shared with 3+ competitors. Competitive bidding environment.</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-white font-bold">PPC Ad Spend</span>
                  <span className="text-red-400 text-sm font-black">£3k - £7k / mo</span>
                </div>
                <div className="text-xs text-slate-500">Stop paying, stop getting leads. No long-term asset building.</div>
              </div>
            </div>
          </GlowCard>

          <GlowCard className="border-brand/40 shadow-[0_0_50px_-10px_rgba(14,165,233,0.1)]">
            <h4 className="text-2xl font-black text-brand mb-6 flex items-center gap-2 uppercase tracking-tighter">
              <TrendingUp className="text-brand" size={24} />
              The "Owned" Asset
            </h4>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-white font-bold">Private Lead Flow</span>
                  <span className="text-brand text-sm font-black">100% Exclusive</span>
                </div>
                <div className="text-xs text-slate-500">Leads come direct to your inbox. No price-shopping comparison.</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-white font-bold">Regional Authority</span>
                  <span className="text-brand text-sm font-black">Glasgow #1</span>
                </div>
                <div className="text-xs text-slate-500">Building equity in your domain that pays off for years.</div>
              </div>
            </div>
          </GlowCard>
        </div>

        {/* MATH SECTION */}
        <div className="bg-brand/5 border border-brand/20 p-8 rounded-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-700">
            <Calculator size={200} className="text-brand" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-brand/10 rounded-2xl text-brand border border-brand/20">
                <Calculator size={32} />
              </div>
              <div>
                <h4 className="text-3xl font-black text-white uppercase tracking-tighter">The ROI Logic</h4>
                <p className="text-slate-400 text-sm">Domestic Install Projection (Central Belt)</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Avg Ticket Value</div>
                <div className="text-4xl font-black text-white">£10k - £20k</div>
                <p className="text-xs text-slate-500 leading-relaxed">Domestic PV + ASHP bundle installations.</p>
              </div>
              <div className="space-y-4 md:border-x md:border-slate-800 md:px-8">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Monthly SEO Investment</div>
                <div className="text-4xl font-black text-brand">£3,000</div>
                <p className="text-xs text-slate-500 leading-relaxed">Comprehensive Scotland Domestic Strategy.</p>
              </div>
              <div className="space-y-4">
                <div className="text-xs font-bold text-brand uppercase tracking-widest">The "Win" Scenario</div>
                <div className="text-4xl font-black text-white flex items-center gap-2">
                  1 Sale <ArrowUpRight className="text-brand" />
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">Just one sale per month covers the entire SEO asset cost.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* INVESTMENT */}
      <Section id="investment">
        <Badge>Scotland Domination</Badge>
        <Heading>Fixed Monthly Investment</Heading>
        <div className="max-w-4xl mx-auto">
           <div className="p-10 rounded-3xl bg-slate-900 border-2 border-brand relative flex flex-col shadow-[0_0_60px_-15px_rgba(14,165,233,0.3)]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-slate-950 text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.2em] shadow-xl">The Comprehensive Strategy</div>
              <div className="text-center mb-10">
                <div className="text-brand font-bold text-xs mb-2 uppercase tracking-widest">Town and Country Renewables Expansion</div>
                <div className="text-6xl font-black text-white">£3,000<span className="text-lg font-normal text-slate-500">/mo</span></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <ul className="space-y-4 text-sm text-slate-300">
                  <li className="flex gap-2 items-start font-bold"><CheckCircle2 size={16} className="text-brand mt-1 shrink-0"/> Glasgow & Paisley Maps Dominance</li>
                  <li className="flex gap-2 items-start font-bold"><CheckCircle2 size={16} className="text-brand mt-1 shrink-0"/> Central Belt & Stirling Funnels</li>
                  <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-brand mt-1 shrink-0"/> Domestic Solar PV Keyword Ranking</li>
                  <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-brand mt-1 shrink-0"/> ASHP Local Optimization</li>
                </ul>
                <ul className="space-y-4 text-sm text-slate-300">
                  <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-brand mt-1 shrink-0"/> Technical SEO Maintenance</li>
                  <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-brand mt-1 shrink-0"/> Scotland Authority Backlinks</li>
                  <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-brand mt-1 shrink-0"/> Monthly Performance Strategy Call</li>
                  <li className="flex gap-2 items-start font-bold text-brand"><CheckCircle2 size={16} className="text-brand mt-1 shrink-0"/> No Commercial/Scaffolding Distraction</li>
                </ul>
              </div>

              {/* SPECIAL OFFER BOX */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="mb-12 p-6 rounded-2xl bg-gradient-to-br from-brand/20 to-sky-900/20 border border-brand/40 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:rotate-12 transition-transform duration-500">
                  <Layout size={80} className="text-brand" />
                </div>
                <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
                  <div className="w-16 h-16 rounded-xl bg-brand/20 flex items-center justify-center text-brand shrink-0">
                    <Sparkles size={32} />
                  </div>
                  <div className="text-center md:text-left">
                    <div className="text-xs font-black text-brand uppercase tracking-widest mb-1">Time-Limited Bonus</div>
                    <h4 className="text-2xl font-black text-white tracking-tighter uppercase leading-tight">
                      Full Website Rebuild Included
                    </h4>
                    <p className="text-slate-400 text-sm mt-1">
                      Worth <span className="text-white font-bold">£3,000</span> — Integrated into your SEO strategy <span className="text-brand font-black italic">FREE temporarily.</span>
                    </p>
                  </div>
                  <div className="ml-auto">
                    <div className="px-4 py-2 bg-brand text-slate-950 text-[10px] font-black rounded-lg uppercase tracking-tighter whitespace-nowrap">
                      Value: £3,000.00
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <div className="p-6 rounded-2xl bg-brand/5 border border-brand/20 text-center">
                <p className="text-brand text-xs font-black uppercase tracking-widest">Market Domination Goal</p>
                <p className="text-slate-400 text-[10px] mt-1 uppercase">Top 3 Rankings for all Central Belt Renewables Terms within 6-12 months</p>
              </div>
           </div>
        </div>
      </Section>

      {/* FOOTER */}
      <Section id="next-steps" className="mb-0">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge>Our Team</Badge>
              <Heading>Scale T&C Renewables Today</Heading>
              <Paragraph className="mx-auto text-center">
                The Central Belt is yours for the taking. We've defined the 50-mile Glasgow radius, now let's capture the search share.
              </Paragraph>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left mb-20 max-w-5xl mx-auto">
               <motion.div whileHover={{ y: -5 }} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col gap-4 group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand"><Zap size={24} /></div>
                    <div><h4 className="text-lg font-bold text-white">Donovan</h4><p className="text-[10px] text-brand uppercase font-black">Head of delivery & Owner</p></div>
                  </div>
                  <a href="tel:07707970661" className="text-sm text-slate-400 hover:text-white flex items-center gap-2"><Phone size={14} className="text-brand" /> 07707 970661</a>
               </motion.div>

               <motion.div whileHover={{ y: -5 }} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col gap-4 group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand"><UserCheck size={24} /></div>
                    <div><h4 className="text-lg font-bold text-white">Alexander Phocas</h4><p className="text-[10px] text-brand uppercase font-black">Sales Executive</p></div>
                  </div>
               </motion.div>

               <motion.div whileHover={{ y: -5 }} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col gap-4 group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand"><Users size={24} /></div>
                    <div><h4 className="text-lg font-bold text-white">Andrew Field</h4><p className="text-[10px] text-brand uppercase font-black">Market Expansion</p></div>
                  </div>
               </motion.div>
            </div>
         </div>
      </Section>

      <footer className="py-20 border-t border-slate-900/50 text-center bg-slate-950">
        <div className="flex flex-col items-center gap-2 group">
          <div className="text-3xl font-black text-white tracking-tighter opacity-40 group-hover:opacity-100 group-hover:text-brand transition-all duration-500 cursor-default">
            SEO<span className="text-brand">DONS</span>
          </div>
          <div className="h-px w-12 bg-slate-800 group-hover:w-32 group-hover:bg-brand transition-all duration-500"></div>
        </div>
        <div className="mt-12 text-[10px] text-slate-700 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Seodons CRM & Strategy. Prepared for Town and Country Renewables.
        </div>
      </footer>
    </div>
  );
}

export default App;
