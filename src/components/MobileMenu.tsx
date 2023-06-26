import cn from 'classnames'
import Link from 'next/link'
import { useState, useEffect, SVGProps, useCallback } from 'react'

import styles from '../styles/mobile-menu.module.css'

const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    {...props}>
    <path
      d="M2.5 7.5H17.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.5 12.5H17.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const CrossIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    shapeRendering="geometricPrecision"
    {...props}>
    <path d="M18 6L6 18" />
    <path d="M6 6l12 12" />
  </svg>
)

export const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false)
      document.body.style.overflow = ''
    } else {
      setIsMenuOpen(true)
      document.body.style.overflow = 'hidden'
    }
  }, [isMenuOpen])

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <>
      <button
        className={cn(styles.burger, 'visible md:hidden')}
        aria-label="Toggle menu"
        type="button"
        onClick={toggleMenu}>
        <MenuIcon data-hide={isMenuOpen} />
        <CrossIcon data-hide={!isMenuOpen} />
      </button>
      {isMenuOpen && (
        <ul
          className={cn(
            styles.menu,
            'flex flex-col absolute bg-gray-100 dark:bg-gray-900',
            styles.menuRendered
          )}>
          <li
            className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
            style={{ transitionDelay: '150ms' }}>
            <Link href="/" className="flex w-auto pb-4">
              私について
            </Link>
          </li>
          <li
            className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
            style={{ transitionDelay: '175ms' }}>
            <Link href="/skill" className="flex w-auto pb-4">
              スキル
            </Link>
          </li>
          <li
            className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
            style={{ transitionDelay: '200ms' }}>
            <Link href="/project" className="flex w-auto pb-4">
              プロジェクト
            </Link>
          </li>
          <li
            className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
            style={{ transitionDelay: '250ms' }}>
            <Link href="/design" className="flex w-auto pb-4">
              デザイン
            </Link>
          </li>
        </ul>
      )}
    </>
  )
}
