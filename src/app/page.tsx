import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen text-slate-200 p-8 md:p-24 font-serif flex flex-col items-center justify-center">
      <ParticleBackground />
      
      <div className="max-w-2xl w-full space-y-12 backdrop-blur-sm bg-black/10 p-10 rounded-2xl border border-white/5">
        <header className="text-center">
          <h1 className="text-5xl font-bold mb-4 tracking-tighter bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
            NullPointerFun
          </h1>
          <p className="text-lg text-slate-400 italic">“代码是理性的诗，文字是感性的逻辑。”</p>
        </header>

        <section className="space-y-6">
          <h2 className="text-xs uppercase tracking-[0.3em] text-slate-500 border-b border-slate-800 pb-2">Technical Blog</h2>
          <div className="grid gap-4">
            {[
              { 
                title: "SpringBoot与数据库的连通【springboot+mybatis-plus】", 
                link: "https://blog.csdn.net/2301_77225287/article/details/145307567" 
              },
              { 
                title: "数据库的连接【MySQL+Navicat】", 
                link: "https://blog.csdn.net/2301_77225287/article/details/145283447" 
              },
              { 
                title: "写在前面：为什么选择前后端分离？而不是不分离", 
                link: "https://blog.csdn.net/2301_77225287/article/details/145280961" 
              },
              { 
                title: "jQuery学习体系概括", 
                link: "https://blog.csdn.net/2301_77225287/article/details/144415897" 
              },
            ].map((post, i) => (
              <a 
                key={i} 
                href={post.link} 
                target="_blank" 
                className="group flex justify-between items-center p-4 rounded-lg bg-white/5 border border-white/10 hover:border-white/30 transition-all hover:bg-white/10"
              >
                <div className="flex flex-col">
                  <span className="text-slate-200 group-hover:text-white transition-colors">{post.title}</span>
                </div>
                <span className="text-slate-500 text-xs whitespace-nowrap ml-4">View on CSDN →</span>
              </a>
            ))}
          </div>
          <div className="text-center pt-2">
            <a 
              href="https://blog.csdn.net/2301_77225287" 
              target="_blank" 
              className="text-xs text-slate-500 hover:text-slate-300 underline underline-offset-4"
            >
              查看更多文章
            </a>
          </div>
        </section>

        <footer className="flex justify-center gap-8 text-sm font-sans pt-4">
          <a href="https://github.com/NullPointerFun" target="_blank" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">Articles</a>
          <a href="mailto:2167406058@qq.com" className="hover:text-white transition-colors">Contact</a>
        </footer>
      </div>
    </main>
  );
}