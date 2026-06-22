export default function Container({ children, className = '' }) {
  return (
    <div
      className={`max-w-[1280px] mx-auto ${className}`}
      style={{ padding: '0 var(--container-pad)' }}
    >
      {children}
    </div>
  )
}
