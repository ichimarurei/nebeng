import Button from '@/lib/global/components/button'
import { ArrowLeftIcon, ArrowRightIcon } from '@/lib/global/svg'

export default function CardPaginationButton() {
    return (
        <div className="lg:flex justify-between items-center mx-0 lg:mx-10">
            <p className="mb-5 lg:mb-0 text-s-regular">
                Showing 1 - 12 of 18 results.
            </p>
            <div className="grid grid-cols-1 lg:flex gap-2">
                <div className="flex gap-2">
                    <Button
                        size="large"
                        className="bg-red-primary items-center gap-1  hidden lg:flex"
                    >
                        <ArrowLeftIcon className="stroke-white" />
                        <p>FIRST</p>
                    </Button>
                    <Button
                        size="large"
                        className="bg-red-primary w-full lg:w-auto"
                    >
                        <p>PREVIOUS</p>
                    </Button>
                </div>

                <div className="flex gap-2">
                    <Button
                        size="large"
                        className="bg-red-primary opacity-55  w-full lg:w-auto"
                    >
                        <p>NEXT</p>
                    </Button>
                    <Button
                        size="large"
                        className="bg-red-primary opacity-55 gap-1 items-center hidden lg:flex"
                    >
                        <p>LAST</p>
                        <ArrowRightIcon className="stroke-white" />
                    </Button>
                </div>
            </div>
        </div>
    )
}
