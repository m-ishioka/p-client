import {
  Button,
  CardActionArea,
  CardActions,
  CardMedia,
  Modal,
} from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import {
  ComponentProps,
  MouseEventHandler,
  useCallback,
  useMemo,
  useState,
} from 'react'

import { DESIGN_LIST } from '@constants/design'

import { Container } from '../components/Container'

const DesignCard = ({
  id,
  name,
  thumbnail,
  href,
  hrefName,
  content,
  onClick,
}: (typeof DESIGN_LIST)[number] & {
  onClick: MouseEventHandler<HTMLButtonElement>
}) => {
  return (
    <Card className=" dark:bg-transparent dark:border-white dark:border dark:shadow-none dark:text-gray-200">
      <CardActionArea id={id} className="p-3 pb-0" onClick={onClick}>
        <CardMedia
          className="p-5 h-80 object-contain"
          component="img"
          image={thumbnail}
        />
        <CardContent>
          <h5 className="font-bold text-md pb-2">{name}</h5>
          <p className="text-sm dark:text-gray-200">{content}</p>
        </CardContent>
      </CardActionArea>
      <CardActions className="m-3 mb-4">
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
          <p className="text-sm dark:text-gray-200">現在は公開していません。</p>
        )}
      </CardActions>
    </Card>
  )
}

const Design = () => {
  const [open, setOpen] = useState(false)
  const [id, setId] = useState('')
  const handleOpen: ComponentProps<typeof DesignCard>['onClick'] = useCallback(
    ({ currentTarget }) => {
      setId(currentTarget.id)
      setOpen(true)
    },
    []
  )
  const handleClose: ComponentProps<typeof Modal>['onClose'] = useCallback(
    () => setOpen(false),
    []
  )
  const designs = useMemo(() => {
    const _designs = []
    const designLength = DESIGN_LIST.length
    for (let index = 0; index < designLength; index++) {
      const design = DESIGN_LIST[index]
      _designs.push(<DesignCard key={index} onClick={handleOpen} {...design} />)
    }
    return _designs
  }, [])

  return (
    <Container>
      <div className="flex flex-col justify-center items-start w-full max-w-4xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-4xl tracking-tight mb-3 text-black dark:text-white">
              デザイン
            </h1>
            <p className="text-gray-400 mb-10">
              私がデザインした、サービス・プロダクトを記載しています。
            </p>
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
        <Card className="w-4/5 h-4/5 absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 p-5 pt-10 pb-10 !overflow-y-scroll">
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

export default Design
