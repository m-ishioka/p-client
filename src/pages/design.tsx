import {
  Button,
  CardActionArea,
  CardActions,
  CardMedia,
  Modal,
} from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useMemo, useRef, useState } from 'react'

import { DESIGN_LIST } from '@constants/design'

import Container from '../components/Container'

// function SkillCard({
//   id,
//   iconName,
//   name,
//   level,
//   experience,
//   projects,
//   content,
// }: (typeof SKILL_LIST)[number]) {
//   const levelCount = useMemo(() => {
//     const _count = []

//     for (let index = 1; index < 6; index++) {
//       if (index <= level) {
//         _count.push(<Star key={index} />)
//       } else {
//         _count.push(<StarBorder key={index} />)
//       }
//     }
//     return _count
//   }, [])

//   const _experience = useMemo(() => {
//     const _year = Math.floor(experience)
//     const _month = (experience * 12) % 12
//     return `約${_year ? `${_year}年` : ''}${_month ? `${_month}ヶ月` : ''}`
//   }, [])

//   return (
//     <Card id={id} className={`w-full mb-10`}>
//       <CardContent>
//         <div className="flex items-center mt-3">
//           <i className={`${iconName} colored text-4xl mr-3 ml-1`} />
//           <Typography className="text-4xl" variant="h3" component="div">
//             {name}
//           </Typography>
//         </div>
//         <span className="m-3" />
//         <div className="flex items-center mb-2">
//           <Typography variant="body2" className="mr-2">
//             習熟度
//           </Typography>
//           <div className="flex">{levelCount}</div>
//         </div>
//         <div className="flex items-center mb-2">
//           <Typography variant="body2" className="mr-2">
//             経験年数
//           </Typography>
//           <Typography variant="body2">{_experience}</Typography>
//         </div>
//         <div className="flex items-center mb-2">
//           <Typography variant="body2" className="mr-2">
//             使用したプロジェクト
//           </Typography>
//           <Typography variant="body2">{projects?.join(', ')}</Typography>
//         </div>
//         <Typography variant="body2">{content}</Typography>
//       </CardContent>
//     </Card>
//   )
// }

function DesignCard({
  id,
  name,
  thumbnail,
  href,
  hrefName,
  content,
  onClick,
}: (typeof DESIGN_LIST)[number] & { onClick: () => void }) {
  return (
    <Card className=" dark:bg-transparent dark:border-white dark:border dark:shadow-none dark:text-gray-200">
      <CardActionArea id={id} className="p-3 pb-0" onClick={onClick}>
        <CardMedia
          className="p-5 h-80 object-contain"
          component="img"
          image={thumbnail}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography
            variant="body2"
            className="dark:text-gray-200"
            color="text.secondary">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="p-7 pt-3 pb-7">
        {href && hrefName ? (
          <Button
            className="normal-case"
            target="_blank"
            href={href}
            size="small"
            color="primary"
            variant="outlined">
            {hrefName}
          </Button>
        ) : (
          <Typography
            variant="body2"
            className="dark:text-gray-200"
            color="text.secondary">
            現在は公開していません。
          </Typography>
        )}
      </CardActions>
    </Card>
  )
}

// const useResizeObserver = (elements, callback) => {
//   useEffect(() => {
//     const resizeObserver = new ResizeObserver((entries) => {
//       callback(entries)
//     })

//     for (const elem of elements) {
//       elem.current && resizeObserver.observe(elem.current)
//     }

//     return () => resizeObserver.disconnect()
//   }, [])
// }

export default function Design() {
  const [open, setOpen] = useState(false)
  const [id, setId] = useState('')
  const handleOpen: any = (e: any) => {
    setId(e.currentTarget.id)
    setOpen(true)
  }
  const handleClose = () => setOpen(false)

  const designs = useMemo(() => {
    const _designs = []
    const designLength = DESIGN_LIST.length
    for (let index = 0; index < designLength; index++) {
      const design = DESIGN_LIST[index]
      _designs.push(<DesignCard key={index} onClick={handleOpen} {...design} />)
    }

    return _designs
  }, [])

  // const [width, setWidth] = useState(0)
  const ref = useRef(null)

  // const handleResize = (entries) => {
  //   const width = entries[0].contentRect.width
  //   setWidth(Math.floor(width))
  // }

  // useResizeObserver([ref], handleResize)

  return (
    <Container>
      <div
        ref={ref}
        className="flex flex-col justify-center items-start w-full max-w-4xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <Typography
              variant="h1"
              className="font-bold text-3xl md:text-4xl tracking-tight mb-1 text-black dark:text-white">
              デザイン
            </Typography>
            <Typography variant="body1" className="text-gray-400 mb-10">
              私がデザインした、サービス・プロダクトを記載しています。
            </Typography>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">{designs}</div>
        <span className="h-16" />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Card className="w-4/5 h-4/5 absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 p-5 pt-10 pb-10 overflow-y-scroll">
          <CardMedia
            className="w-full object-cover"
            component="img"
            image={`/${id}.jpg`}
          />
        </Card>
      </Modal>
    </Container>
  )
}
