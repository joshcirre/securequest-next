import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const solutions = [
  { name: 'Terms of Service', href: 'https://www.helpscout.com/company/legal/terms-of-service/' },
  {
    name: 'Privacy Policy',
    href: 'https://www.helpscout.com/company/legal/privacy/',
  },
  {
    name: 'Security Policy',
    href: 'https://www.helpscout.com/company/legal/security/',
  },
  {
    name: 'GDPR',
    href: 'https://www.helpscout.com/company/legal/gdpr/',
  },
  { name: 'Data Processing Amendment', href: 'https://www.helpscout.com/company/legal/dpa/' },
  { name: 'Cookie Policy', href: 'https://www.helpscout.com/company/legal/cookie-policy/' },
  {
    name: 'List of Sub-processors',
    href: 'https://www.helpscout.com/company/legal/sub-processors/',
  },
  {
    name: 'Accessibility Statement',
    href: 'https://www.helpscout.com/company/legal/accessibility-statement/',
  },
]

export function FAQDropdown() {
  return (
    <Popover className="relative">
      <Popover.Button
        className="inline-flex gap-x-1 font-semibold leading-6 text-sm items-center px-4 py-1 relative
            text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300
            transition-colors
            rounded-md
            border border-slate-200 dark:border-slate-500 hover:border-slate-300 dark:hover:border-slate-500 w-full"
      >
        <span>What pages am I chatting with?</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="w-screen max-w-sm flex-auto rounded-3xl bg-white p-4 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            {solutions.map((item) => (
              <div key={item.name} className="relative rounded-lg p-2 hover:bg-gray-50">
                <Link href={item.href} className="font-semibold text-gray-900">
                  {item.name}
                  <span className="absolute inset-0" />
                </Link>
              </div>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
