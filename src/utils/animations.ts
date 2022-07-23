export const fadeInUp = {
    initial: {
        y: 60,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: .6,
        }
    }
}

export const fadeInRight = {
    initial: {
        x: "-100vw",
    },
    animate: {
        x: 0,
        transition: {
            duration: .6,
        }
    }
}

export const container = {
    animate: { transition: { staggerChildren: .1 }}
}