import { useState, useEffect } from 'react'

export default function VideoPopup({ style, videoId = null }) {
    const [isOpen, setOpen] = useState(false)

    // Don't render if no video ID is provided
    if (!videoId) {
        return null
    }

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    // Close modal on Escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isOpen) {
                setOpen(false)
            }
        }
        document.addEventListener('keydown', handleEscape)
        return () => document.removeEventListener('keydown', handleEscape)
    }, [isOpen])

    return (
        <>
            {style === 1 &&
                <a 
                    onClick={() => setOpen(true)} 
                    className="play-btn popup-video" 
                    data-aos="fade-left" 
                    data-aos-delay={700}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setOpen(true)}
                >
                    <i className="fas fa-play" /> <span>Watch The Video</span>
                </a>
            }
            {style === 2 &&
                <a 
                    onClick={() => setOpen(true)} 
                    className="play-btn popup-video"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setOpen(true)}
                >
                    <i className="fas fa-play" />Watch Video
                </a>
            }
            {style === 3 &&
                <a 
                    onClick={() => setOpen(true)} 
                    className="play-btn popup-video"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setOpen(true)}
                >
                    <i className="fas fa-play" />
                </a>
            }

            {/* Custom Video Modal */}
            {isOpen && (
                <div 
                    className="video-modal-overlay"
                    onClick={() => setOpen(false)}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="video-modal-title"
                >
                    <div 
                        className="video-modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="video-modal-close"
                            onClick={() => setOpen(false)}
                            aria-label="Close video"
                        >
                            <i className="fas fa-times" />
                        </button>
                        <div className="video-modal-iframe-wrapper">
                            <iframe
                                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                                title="Video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="video-modal-iframe"
                            />
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                .video-modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.9);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;
                    animation: fadeIn 0.3s ease-in-out;
                    padding: 20px;
                }

                .video-modal-content {
                    position: relative;
                    width: 100%;
                    max-width: 1200px;
                    max-height: 90vh;
                    animation: scaleIn 0.3s ease-in-out;
                }

                .video-modal-close {
                    position: absolute;
                    top: -50px;
                    right: 0;
                    background: transparent;
                    border: 2px solid rgba(255, 255, 255, 0.5);
                    color: #fff;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    z-index: 10000;
                    font-size: 20px;
                }

                .video-modal-close:hover {
                    background: rgba(255, 255, 255, 0.1);
                    border-color: rgba(255, 255, 255, 0.8);
                    transform: rotate(90deg);
                }

                .video-modal-iframe-wrapper {
                    position: relative;
                    padding-bottom: 56.25%; /* 16:9 aspect ratio */
                    height: 0;
                    overflow: hidden;
                    border-radius: 8px;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
                }

                .video-modal-iframe {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: 8px;
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes scaleIn {
                    from {
                        transform: scale(0.9);
                        opacity: 0;
                    }
                    to {
                        transform: scale(1);
                        opacity: 1;
                    }
                }

                @media (max-width: 768px) {
                    .video-modal-content {
                        max-width: 100%;
                    }

                    .video-modal-close {
                        top: -40px;
                        width: 35px;
                        height: 35px;
                        font-size: 18px;
                    }
                }
            `}</style>
        </>
    )
}