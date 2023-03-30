import React from 'react'

export default function RamadanInfo() {
  return (
    <div className='shade1 full_page'>
        <div className="shade2 p-3">
            <div className="row">
                <div className="col">
                    <center><h4>রহমতের ১০ দিন</h4></center> <hr/>
                        <div className='row'>
                            <div className='col-2'>রমযান</div>
                            <div className='col-3'>তারিখ</div>
                            <div className='col'>বার</div>
                            <div className='col'>সাহরী</div>
                            <div className='col'>ইফতার</div>
                        </div> <hr/>
                        <div className='row my-1'>
                            <div className='col-2'>১</div>
                            <div className='col-3'>২৪ মার্চ</div>
                            <div className='col'>শুক্র</div>
                            <div className='col'>৪ঃ৩৮</div>
                            <div className='col'>৬ঃ১৪</div>
                        </div>
                        <div className='row my-1'>
                            <div className='col-2'>২</div>
                            <div className='col-3'>২৫ মার্চ</div>
                            <div className='col'>শনি</div>
                            <div className='col'>৪ঃ৩৭</div>
                            <div className='col'>৬ঃ১৪</div>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}
