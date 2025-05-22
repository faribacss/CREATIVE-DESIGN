function TeamItem({img, name, job, description, social, delay}){
    return (
      <>
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={delay}>
          <div className="team-member">
              <img src={img} className="img-fluid img-item" alt="team1" />
            <div className="member-info flex-grow-1">
              <h4>{name}</h4>
              <span>{job}</span>
              <p className="team-content-description">
                {description}
              </p>
              <div className="team-social">
                {social.map((item, index) => (
                  <i key={index} className={item}></i>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default TeamItem;