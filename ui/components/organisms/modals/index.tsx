import React, { useContext, useMemo } from 'react'
import ModalBuy from './modal-buy'
import ModalMint from './modal-mint'
import { ModalContext, ModalContextValue, ModalElement } from '@ui/contexts/modal'

const Modal = () => {
  const { element, payload, isOpen, handleCloseModal } = useContext(ModalContext)

  const Component = useMemo(() => {
    const map = new Map<ModalContextValue['element'], any>([
      [ModalElement.Buy, ModalBuy],
      [ModalElement.Mint, ModalMint],
    ])

    return map.get(element)
  }, [element])

  if (!Component) {
    return null
  }

  return <Component payload={payload} isOpen={isOpen} onClose={handleCloseModal} />
}

export default Modal
