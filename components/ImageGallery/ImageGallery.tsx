import Image from "next/image"

type Props = {
    images: Image[]
}

export default function ImageGallery({ images }: Props) {
    if (!images) {
        return <div>No images yet.</div>
    }

    return (
        <div className="image-gallery">
            {images.map(image => (
                <div key={image.sourceUrl} className="image-gallery__image-container">
                    <Image src={image.sourceUrl} alt={image.title} fill />
                </div>
            ))}
        </div>
    )
}