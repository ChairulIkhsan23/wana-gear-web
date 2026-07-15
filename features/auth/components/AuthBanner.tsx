export function AuthBanner() {
  return (
    <div className="relative w-full lg:w-1/2 h-48 lg:h-auto shrink-0 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=1600"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-emerald-900/70" />
      </div>
      <div className="relative z-10 flex items-center justify-center h-full px-6 lg:px-16 py-4 lg:py-20">
        <h2 className="text-xl lg:text-4xl font-bold tracking-tight leading-tight text-white">
          Adventures Start Here
        </h2>
      </div>
    </div>
  )
}
