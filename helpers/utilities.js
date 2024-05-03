export const videoLoops = function () {

    let homepageVideos = []
    let curVideo = 0

    Array.from(document.querySelectorAll('.mini_block .section_image > video')).forEach((item, index) => {
        homepageVideos[index] = item
        const card = item.parentNode.parentNode
        const intro = card.getElementsByClassName('intro')[0]
        item.addEventListener('ended', () => {
            item.currentTime = 0

            if (card.classList.contains('active-video')) {
                console.log('item.play')
                item.play()
            } else {
                console.log('playnext')
                playNext()
            }
        })

        item.parentNode.parentNode.addEventListener('mouseenter', () => {
            intro.style.height = intro.scrollHeight + 'px'
            card.classList.add('active-video')
            curVideo = index - 1
            pauseAll()
            playNext()
        })
        item.parentNode.parentNode.addEventListener('mouseleave', () => {
            intro.style.height = '0px'
            card.classList.remove('active-video')
        })
    })

    curVideo = homepageVideos.length
    if (homepageVideos.length) {
        playNext()
    }

    function playNext() {
        curVideo++
        if (curVideo >= homepageVideos.length) {
            curVideo = 0
        }
        if (isNaN(homepageVideos[curVideo].duration)) {
            curVideo++;
        }
        homepageVideos[curVideo].play()
    }

    function pauseAll() {
        homepageVideos.forEach(function (item, index) {
            item.pause()
        })
    }
}