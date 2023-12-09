package service

type UserRepository interface {
	getById(id string) (UserTest, error)
}

type UserTest struct {
	id   string
	name string
}

type UserService struct {
	repo UserRepository
}

func (s UserService) GetUserById(id string) (UserTest, error) {
	return s.repo.getById(id)
}
